
import axios from 'axios'

import React, {createContext, useState} from 'react'

export const AuthContext=createContext()

 const AuthContest = ({children}) => {
    const [isAuth, setIsAuth]= useState(false)
    const [token, setToken] =useState(null)



  const handleAuth = (data) => {
     axios.post(`https:///api/login`, {
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



// import React, {useReducer} from "react";
// import { useState, createContext } from "react";
// import reducer from "./reducer";

// export const AuthContext =React.createContext();

// const initState = {
//   isLoading:false,
//   isAuth : false,
//   token:"",
//   isError:false,
// }



//  const AuthContextProvider = ({ children }) => { 
//   cosnt [state, dispatch] = useReducer(reducer, initState)
//   // const [auth, setAuth] = useState({ auth: false, token: null });
//   // const userLogin = (token) => {
//   //   setAuth({ auth: true, token: token });
//   // };
//   return (
//     <AppContext.Provider value={{ state, dispatch }}>   //auth, userLogin
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AuthContextProvider;

