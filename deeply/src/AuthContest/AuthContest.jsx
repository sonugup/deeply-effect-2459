
import axios from 'axios'

import React, {createContext, useState} from 'react'

export const AuthContext=createContext()

 const AuthContest = ({children}) => {
    const [isAuth, setIsAuth]= useState(false)
    const [token, setToken] =useState(null)



  const handleAuth = (data) => {
     axios.post(`https://reqres.in/api/login`, {
        email:data.email,
        password:data.password
     }).then(res => {

        if(res.data){
            setIsAuth(true)
            setToken(res.data.token)
        }
     })
   }
  return (

    <AuthContext.Provider value={{isAuth, token, handleAuth}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthContest;

