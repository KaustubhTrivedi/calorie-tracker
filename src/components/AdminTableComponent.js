import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'
import users from '../lib/users'

const AdminTableComponent = () => {
    const router = useRouter()
    return (
        <div className='h-screen'>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of User</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Average Calories in last 7 days</TableCell>
                        </TableRow>
                    </TableHead>
                    {users.map((user) => (
                        <TableBody>
                            <TableRow>
                                <TableCell className='cursor-pointer' onClick={() =>router.push(`/userview`)}>{user.name}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell
                                    className={user.averageCaloriesOfSevenDays > 2100 ? "bg-red-200" : ""}
                                    
                                >
                                    {user.averageCaloriesOfSevenDays}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ))}
                </Table>
            </TableContainer>
        </div>
    )
}

export default AdminTableComponent