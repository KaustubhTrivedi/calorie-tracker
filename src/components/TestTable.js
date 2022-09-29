import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { data } from 'autoprefixer'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const TestTable = () => {

    const [user, setUser] = useState({})
    const [foodArray, setFoodArray] = useState([])

    // const foodArray = user
    // const sortedFoodsArray = foodArray.sort((a, b) => {
    //     let dateA = new Date(a.createdAt)
    //     let dateB = new Date(b.createdAt)
    //     return dateB - dateA
    // })

    useEffect(() => {
        (async () => {
            const user = await axios.get(`/api/db/GET/fetchuser`)
            setUser(user.data)
            setFoodArray(user.data.foods)
            // console.log(data)
        })()
    }, [])

    console.log(foodArray)


    return (
        <div>
            {/* <Formik
                initialValues={
                    { email: "", }
                }
                onSubmit={async (values) => {
                    const user = await fetch("/api/db/GET/fetchUser", {
                        method: "POST",
                        body: JSON.stringify({ email: values.email })
                    })
                    // console.log(values)
                }}
            >

                <Form className=' flex space-x-5 m-5 items-center'>
                    <TextField name='email' />
                    <Button variant='outlined' type="submit">Submit</Button>
                </Form>

            </Formik> */}
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
                    {foodArray.map((food) => (
                        <TableBody key={food.createdAt}>
                            <TableRow>
                                <TableCell>{food.foodName}</TableCell>
                                <TableCell align="center">{food.calories}</TableCell>
                                <TableCell align="center">
                                    {food.createdAt}
                                </TableCell>
                                <TableCell align="center">{`${food.price}`}</TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
                </Table>
            </TableContainer>
        </div >
    )
}
export default TestTable