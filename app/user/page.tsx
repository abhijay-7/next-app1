import React, { Suspense, use } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props{
  searchParams:{sortOrder?:string}
}

const UserPage = async ({searchParams:{sortOrder}}:Props) => {
   
   

  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <Link href="/user/new" className='btn'>New User</Link>
    <Suspense fallback= {<p>Loading...</p>}>
    <UserTable by={sortOrder} />
    </Suspense>
    </>
  )
}

export default UserPage
