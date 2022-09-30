

import React, {useState, useContext} from 'react';

import './Creat.css';
import {AuthContext} from '../AuthContest/AuthContest';
// import { Navigate } from 'react-router-dom';

 
function Login() {

    const  {isAuth, token, handleAuth} =useContext( AuthContext ) 
    
    // let data=JSON.parse(localStorage.getItem("data")) || []
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
 
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    
    const handleSubmit=(e)=>{


    //   if(password!=data.Password)
    //   {
       
    //     alert("password Not Match");
    //   }
    //   else{
        
    //     let data=(email, password)
    //     localStorage.setItem("data", JSON.stringify(data))
    //   }
      e.preventDefault();
      console.log(isAuth, token)
      let data={email :email , password:password}
      handleAuth(data)
    //   if(isAuth){
    //     Navigate()
    //   }
    }
  return (
    <div className="Form">
    <header className="Form-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     
    
    
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e)  => {handleEmailChange(e)}} /><br/>
          
        <label>
          Password:
        </label><br/>
        <input type="password" value={password} required onChange={(e)   => {handlePasswordChange(e)}} /><br/>
             
        <label>
          Confirm Password:
        </label><br/>
        <input type="password" value={confPassword} required onChange={(e)   => {handleConfPasswordChange(e)}} /><br/>
                
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
 
export default Login;
