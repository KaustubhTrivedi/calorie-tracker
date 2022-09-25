import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup'
import axios from 'axios';

export default function UserLogin() {
  const router = useRouter()

  return (
    <div>
      
      <div className="flex justify-center items-center h-screen">
      <h1 className='top-48 left-[48%] absolute font-bold'>Signup</h1>
        <Formik initialValues={{
          username: '',
          email: '',
          password: '',
        }}
          validationSchema={Yup.object({
            username: Yup.string().required("Required"),
            email: Yup.string().email('Invalid email address').required("Required"),
            password: Yup.string().required("Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
          })}
          onSubmit={async (values, { setSubmitting }) => {
            // setTimeout(() => {
            //   setEmail(values.email)
            //   setPassword(values.password)
            //   alert(JSON.stringify(values, null, 2));
            // }, 500);
            try {
              setSubmitting(true);
              const res = await axios.post("/api/auth/signup", {
                username: values.username,
                email: values.email.toLowerCase(),
                password: values.password,
              })
              if (res.status === 422) {
                Toast("Email already exists", "Please Signin", "error");
                setSubmitting(false);
              }
              if (res.statusText === "OK") {
                Toast("Successfully Signed Up", "", "success");
                router.push("/userview")
                return req.json()
              }
              else {
                console.log("Messed Up")
              }
              setSubmitting(false);
            } catch (error) {
              console.log(error)
            }
          }}>
          {({ submitForm, isSubmitting }) => (
            <div>
              <Toaster />
              <Form className='space-y-5 w-fit'>
                <Field
                  component={TextField}
                  name="username"
                  type="text"
                  label="username"
                />
                <br />
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                />
                <br />
                <Field
                  component={TextField}
                  type="password"
                  label="Password"
                  name="password"
                />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  className='ml-16'
                  variant="outlined"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Submit
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div >
  )
}

