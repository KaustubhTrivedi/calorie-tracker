import { Button, Modal, TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
// import { useSession } from 'next-auth/react'

const FoodEntryModal = ({ open, handleClose }) => {


  const formik = useFormik({
    initialValues: {
      email: "",
      nameOfFood: "",
      priceOfFood: "",
      calories: "",
      dateOfEntry: null,
      timeOFEntry: null,
    },
    onSubmit: async values => {
      const response = await fetch("/api/foodentry", {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          name: values.nameOfFood,
          price: values.priceOfFood,
          calories: values.calories,
        }),
      })
      handleClose()
      console.log(response.status)
      return response.json()
    }
  })

  const [test, setTest] = useState()
  // const handleDateChange = (updatedDate) => {
  //   setDate(updatedDate)
  // }
  // const handleTimeChange = (updatedtime) => {
  //   setTime(updatedtime)
  // }

  return (
    <Modal open={open} onClose={handleClose}>
      <div className='flex my-52 justify-center'>
        <div className='flex items-center justify-center w-80 p-5 bg-white rounded-lg' >
          <form className='flex flex-wrap justify-center space-y-5' onSubmit={formik.handleSubmit}>
            <TextField
              id="standard-basic"
              label="email"
              variant="standard"
              className='inline-block'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
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
            {/* <DatePicker
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
              /> */}
            <Button type='submit' variant="outlined">Submit</Button>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default FoodEntryModal