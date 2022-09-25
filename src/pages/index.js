import { Button } from '@mui/material'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()


  return (
    <div className="flex justify-center items-center h-screen space-x-5">
      <Button variant='outlined' onClick={() => router.push("/login")}>Login</Button>
      <Button variant='outlined' onClick={() => router.push("/signup")}>Signup</Button>
    </div>
  )
}