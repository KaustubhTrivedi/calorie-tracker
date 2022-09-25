import React from 'react'
import { Button, Modal } from '@mui/material'
import { useState } from 'react'
import FoodEntryModal from './FoodEntryModal'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useSession } from 'next-auth/react'

const Header = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [open])
    const handleClose = useCallback(() => {
        setOpen(false)
    }, [open])

    return (
        <div className='flex h-16 items-center p-2 justify-end mr-10 space-x-5 relative'>
            <p className='items-center'></p>
            <Button variant="outlined" color="success" onClick={handleOpen}> Input Food Data</Button>
            <FoodEntryModal open={open} handleClose={handleClose} />
        </div>
    )
}

export default Header