import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div><Link href="/login">Login</Link>
    or <Link href="/signup">SignUp</Link></div>
  )
}

export default page