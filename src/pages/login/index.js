import { Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import { useRouter } from 'next/router';
import * as Yup from 'yup'
import { signIn } from 'next-auth/react'

export default function AdminLogin() {
  
  const router = useRouter()

  return (
    <div>
      <h1 className='top-52 left-[47%] absolute font-extrabold'>Login</h1>
      <div className="flex justify-center items-center h-screen">
        <Formik initialValues={{
          email: '',
          password: '',
        }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required("Required"),
            password: Yup.string().required("Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])(?=.{8,})/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true)
            const status = await signIn('credentials', {
              redirect: false,
              email: values.email,
              password: values.password
            })
            // if (status.ok) {
            //   router.push("/userview")
            // }
            console.log(status)
            setSubmitting(false)
          }}>
          {({ submitForm, isSubmitting }) => (
            <div>
              <Form className='space-y-5 w-fit'>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  required
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
    </div>
  )
}

