import { Button, Modal, TextField } from '@mui/material'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
// import { useSession } from 'next-auth/react'

const FoodEntryModal = ({ open, handleClose }) => {


  const [date, setDate] = useState()
  const [time, setTime] = useState()

  const formik = useFormik({
    initialValues: {
      nameOfFood: "",
      priceOfFood: "",
      calories: "",
      dateOfEntry: null,
      timeOFEntry: null,
    },
    onSubmit: values => {
      axios.put("/api/foodentry", {
        name: formik.values.nameOfFood,
        price: formik.values.priceOfFood,
        calories: formik.values.calories,
        date: date,
        time: time
      })
      handleClose()
    }
  })


  const handleDateChange = (updatedDate) => {
    setDate(updatedDate)
  }
  const handleTimeChange = (updatedtime) => {
    setTime(updatedtime)
  }

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className='flex my-52 justify-center'>
          <div className='flex items-center justify-center w-80 p-5 bg-white rounded-lg' onSubmit={formik.handleSubmit}>
            <form action="POST" className='flex flex-wrap justify-center space-y-5'>
              <TextField
                id="standard-basic"
                label="Name of the food"
                variant="standard"
                className='inline-block'
                name='nameOfFood'
                onChange={formik.handleChange}
                value={formik.values.nameOfFood}
                required
              />
              <TextField
                id="standard-basic"
                label="Calories in it"
                variant="standard"
                className='inline-block'
                name='calories'
                onChange={formik.handleChange}
                value={formik.values.calories}
                required
              />
              <TextField
                id="standard-basic"
                label="Price"
                variant="standard"
                className='inline-block'
                name='priceOfFood'
                onChange={formik.handleChange}
                value={formik.values.priceOfFood}
                required
              />
              <DatePicker
                label="Date of your meal"
                disableMaskedInput
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="Time"
                disableMaskedInput
                value={time}
                onChange={handleTimeChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button type='submit' variant="outlined">Submit</Button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default FoodEntryModal