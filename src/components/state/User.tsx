import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}


export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null) //ts know that null/the auth user is the type.
  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name} </div>
      <div>User email  is {user?.email}</div>
    </div>
  )
}
//in line 25, 26 we have auto complete of optional- ?. this is because it can be also null
 
//or using type assertion to tell ts that the empty {} is of type userAuth
//this is in case we dont want optional type (?), and we want the user to have value state all 
//the time (meaning he dont need to logout. so we deleted the logout and the optional type):

/*
export const User = () => {
  const [user, setUser] = useState <AuthUser>({} as AuthUser) 
  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com'
    })
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name} </div>
      <div>User email  is {user.email}</div>
    </div>
  )
}


*/