'use client';
import { useRouter } from 'next/navigation';
import React from 'react'


const NewUserpage = () => {
  const router = useRouter();
  return (
    <button className='btn btn-primary' onClick={()=>router.push('/user')}>Create</button>
  )
}

export default NewUserpage