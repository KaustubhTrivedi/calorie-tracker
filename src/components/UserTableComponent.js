import { useState, useEffect, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper';
// import foods from '../lib/foods'
// import User from '../models/User'
import Toast, { Toaster } from "react-hot-toast"
import { Button, LinearProgress } from '@mui/material';
import axios from 'axios';
// import { useSession } from 'next-auth/react'
export default function UserTableComponent() {

    const [totalCalories, setTotalCalories] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [user, setUser] = useState({})
    const [foodArray, setFoodArray] = useState([])
    const [isAdmin, setIsAdmin] = useState(true)
    const [foodId, setFoodId] = useState()

    const email = user.email;
    useEffect(() => {
        (async () => {
            const user = await axios.get(`/api/db/fetchuser`)
            setUser(user.data)
            setFoodArray(user.data.foods)
            // console.log(data)
        })()
    }, [])

    const normalisePrice = (value) => ((value - 0) * 100) / (1000 - 0) //Using these values for progress bar
    const normaliseCalories = (value) => ((value - 0) * 100) / (2100 - 0)//Using these values for progress bar

    useEffect(() => {
        const forCalculatingPrice = []
        const forCalculatingCalories = []

        foodArray.forEach((food) => {
            forCalculatingPrice.push(food.price)
        })
        setTotalPrice(forCalculatingPrice.reduce((partialSum, a) => partialSum + a, 0))


        foodArray.forEach((food) => {
            forCalculatingCalories.push(food.calories)
        })
        setTotalCalories(forCalculatingCalories.reduce((partialSum, a) => partialSum + a, 0))
    }, [foodArray])


    useEffect(() => {
        if (totalPrice > 1000) {
            Toast("You are over budget 🤑💵💵")
        }
    }, [totalPrice])

    useEffect(() => {
        if (totalCalories > 2100) {
            Toast("You have eaten 2100 calories for the day🍇🍈")
        }
    }, [totalCalories])

    const sortedFoods = foodArray.sort((a, b) => {
        let dateA = new Date(a.createdAt)
        let dateB = new Date(b.createdAt)
        return dateB - dateA
    })

    const deleteFood = () => {
        axios.post(`/api/db/deletefood`, {
            email: email,
            foodId: foodId
        })
    }

    return (
        <div className='flex'>
            <Toaster />
            <TableContainer component={Paper} className='px-20 w-2/3'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='font-bold border-b-2 border-zinc-900'>
                        <TableRow>
                            <TableCell>Name of Food</TableCell>
                            <TableCell align="center">Calories</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Price</TableCell>
                            {isAdmin ? <TableCell align="center">ID</TableCell> : ""}
                            {isAdmin ? <TableCell align="center">Action</TableCell> : ""}
                        </TableRow>
                    </TableHead>
                    {sortedFoods.map((food) => (
                        <TableBody key={food.createdAt}>
                            <TableRow>
                                <TableCell>{food.foodName}</TableCell>
                                <TableCell align="center">{food.calories}</TableCell>
                                <TableCell align="center">{food.createdAt}</TableCell>
                                <TableCell align="center">{`₹${food.price}`}</TableCell>
                                {isAdmin ? <TableCell align="center">{food._id}</TableCell> : ""}
                                {isAdmin ? <TableCell align="center"><Button onClick={() => {
                                    setFoodId(food._id)
                                    deleteFood()
                                    setFoodId(0)

                                }}>Delete</Button></TableCell> : ""}
                            </TableRow>
                        </TableBody>
                    ))}

                </Table>
            </TableContainer>
            <div className='h-screen w-1/3 space-y-3 pt-10 px-5'>
                <div className={totalPrice > 1000 ? "bg-red-300" : ""}>Total price of food till now: {totalPrice} / 1000</div>
                <LinearProgress variant='determinate' value={normalisePrice(totalPrice)} />
                <div className={totalCalories > 2100 ? "bg-red-300" : ""}>Total Calories consumed : {totalCalories} / 2100</div>
                <LinearProgress variant='determinate' value={normaliseCalories(totalCalories)} />
            </div>
        </div >
    );
}
