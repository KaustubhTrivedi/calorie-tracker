import { useState, useEffect, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper';
import foods from '../lib/foods'
// import User from '../models/User'
import Toast, { Toaster } from "react-hot-toast"
import { LinearProgress } from '@mui/material';
// import { useSession } from 'next-auth/react'
export default function UserTableComponent() {

    const [totalCalories, setTotalCalories] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    // const [timeOfEating, setTimeOfEating] = useState()

    // const email = "kaus12tri@gmail.com"

    // const user = User.findById({
    //     email: email
    // }, (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(data)
    // })

    const normalisePrice = (value) => ((value - 0) * 100) / (1000 - 0) //Using these values for progress bar
    const normaliseCalories = (value) => ((value - 0) * 100) / (2100 - 0)//Using these values for progress bar

    useEffect(() => {
        const forCalculatingPrice = []
        const forCalculatingCalories = []
        foods.forEach((food) => {
            forCalculatingPrice.push(food.price)
        })
        setTotalPrice(forCalculatingPrice.reduce((partialSum, a) => partialSum + a, 0))


        foods.forEach((food) => {
            forCalculatingCalories.push(food.calories)
        })
        setTotalCalories(forCalculatingCalories.reduce((partialSum, a) => partialSum + a, 0))
    }, [foods])


    useEffect(() => {
        if (totalPrice > 1000) {
            Toast("You are over budget 🤑💵💵")
        }
    }, [totalPrice])

    useEffect(() => {
        if (totalCalories > 2100) {
            Toast("You are over budget 🤑💵💵")
        }
    }, [totalCalories])

    const sortedFoods = foods.sort((a, b) => {
        let dateA = new Date(a.createdAt)
        let dateB = new Date(b.createdAt)
        return dateB - dateA
    })


    return (
        <div className='flex' suppressHydrationWarning >
            <Toaster />
            <TableContainer component={Paper} className='px-20 w-2/3'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='font-bold border-b-2 border-zinc-900'>
                        <TableRow>
                            <TableCell>Name of Food</TableCell>
                            <TableCell align="center">Calories</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>

                    {sortedFoods.map((food) => (
                        <TableBody>
                            <TableRow>
                                <TableCell>{food.foodName}</TableCell>
                                <TableCell align="center">{food.calories}</TableCell>
                                <TableCell align="center">{`${food.createdAt.getDay()}/${food.createdAt.getMonth()}/${food.createdAt.getFullYear()}`}</TableCell>
                                <TableCell align="center">{`₹${food.price}`}</TableCell>
                            </TableRow>
                        </TableBody>
                    ))}

                </Table>
            </TableContainer>
            <div className='h-screen w-1/3 space-y-3 pt-10 px-5'>
                <div className={totalPrice > 1000 && "bg-red-300"}>Total price of food till now: {totalPrice} / 1000</div>
                <LinearProgress variant='determinate' value={normalisePrice(totalPrice)} />
                <div className={totalCalories > 2100 && "bg-red-300"}>Total Calories consumed : {totalCalories} / 2100</div>
                <LinearProgress variant='determinate' value={normaliseCalories(totalCalories)} />
            </div>
        </div >
    );
}
