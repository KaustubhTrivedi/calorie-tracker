import { useState, useEffect, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper';
import Toast, { Toaster } from "react-hot-toast"
// import { useSession } from 'next-auth/react'

function createData(name, calories, date, price) {
    return { name, calories, date, price };
}


const month = new Date(Date.UTC(2012, 11, 20, 3, 0, 0)).toLocaleString("en-US", { month: "long" });

export default function UserTableComponent() {

    const [totalCalories, setTotalCalories] = useState(0)
    const [dateOfEating, setDateOfEating] = useState()
    const [timeOfEating, setTimeOfEating] = useState()

    const caloriesArray = new Array()

    // useEffect(() => {
    //     if (totalCalories > 2100) {
    //         Toast("Stop... You have passed your calorie limit!!😂")
    //     }
    //     if (totalCalories < 2100) {
    //         Toast("Well...you're Good")
    //     }
    // }, [totalCalories])

    // useEffect(() => {
    //     rows.forEach((row) => {
    //         caloriesArray.push(row.calories)
    //     })
    //     setTotalCalories(caloriesArray.reduce((partialSum, a) => partialSum + a, 0))
    // })



    return (
        <div>
            <Toaster />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of Food</TableCell>
                            <TableCell align="center">Calories</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                Total
                            </TableCell>
                            <TableCell align='center' className={totalCalories > 2100 ? "bg-red-100" : ""}>{totalCalories}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
