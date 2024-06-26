'use client';

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data:session}=useSession();
  return (
    <div className='flex bg-slate-200 p-5 space-x-3'><Link href="/" className='mr-5'>Next.js</Link>
    <Link href="/user" className='mr-5'>Users</Link>
    {status === 'unauthenticated' && <Link href="/api/auth/signin" className=''>Login</Link>} 
    {status==='authenticated' && <div>{session.user!.name}<Link href="/api/auth/signout" className='ml-3'>Sign out</Link></div>}
    </div>
  )
}

export default NavBar