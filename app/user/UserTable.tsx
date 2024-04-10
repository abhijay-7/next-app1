import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'


interface User{
  id: number;
  name : string;
  email: string;

}

interface Props{
  
by?:  string;
}
const UserTable = async ({by}:Props) => {
  const res = await fetch(
  'https://jsonplaceholder.typicode.com/users',
  {next: {revalidate:10 } 
}
  );
  let users: User[] = await res.json();
  if(by==="name")
  users =sort(users).asc(u=>u.name);
else if(by==="email")
users =sort(users).asc(u=>u.email);

  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th><Link href ="/user?sortOrder=name">Name</Link></th>
          <th><Link href="/user?sortOrder=email">Email</Link></th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>)}
      </tbody>
        
    </table>
  )
}

export default UserTable