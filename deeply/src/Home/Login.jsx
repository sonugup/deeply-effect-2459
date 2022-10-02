

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


import './Creat.css';
import  {AuthContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';
import { Container, 
  Text, 
  Image, 
  Flex, 
  Box, 
  Input, 
  

 } from "@chakra-ui/react"


function Login() {



  const { isAuth, token, handleAuth } = useContext(AuthContext)

  // let data=JSON.parse(localStorage.getItem("data")) || []
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  
  const handleSubmit = (e) => {


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
    let data = { email: email, password: password }
    handleAuth(data)
    if (isAuth) {
      return <Navigate to="/about" />
    }
  }
  return (
    <div className="Form">

      <Flex>
        <header className="Form-header">

          <Image w="200px" m="auto" src="https://tse1.mm.bing.net/th?id=OIP.NKFrNX_QT0o-3YN0pBLPZAHaHa&pid=Api&P=0" alt="" />
          <form onSubmit={(e) => (handleSubmit)} >

            <h2>Login</h2>

            <label>
              Email:
            </label><br />
            <Input 
            type="email" 
            value={email} 
            required 
            onChange={(e) => setEmail(handleEmailChange)} /><br />

            <label>
              Password:
            </label><br />
            <Input 
            type="password" 
            value={password} 
            required 
            onChange={(e) => setPassword(handlePasswordChange)} /><br />

            <Input type="submit" value="Log In" bg="blue" border="none" color="white" fontSize="20px"/>
            {/* <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              variant="outline"
              onClick={(e) =>(handleLogin)}
            >
              Login
            </Button> */}

            <Flex fontSize="15px" justifyContent="space-between">
              <Link to="/">Create an account</Link>
              <Link textDecoretion="none" to="/">Forgot your password?</Link>
            </Flex>
          </form>
          <Text fontSize="15px" textAlign="center">We no longer support social sign on. Please click here to set your password and access your account.</Text>
          <br />
          <Text fontSize="12px">Terms of Service •Privacy Policy •Security</Text>
        </header>
        <Container w="100%" bg="yellow">
          <Box w="320px" mt="8%" pl="8%">
            <Text borderRadius="40px" p="8px" bg="white" fontSize="18px" textAlign="center" border="1px solid" w="160px" color=" #645911">New from Buffer</Text>
            <Text fontFamily="fantasy" fontSize="26px" >Introducing: A free micro-site by Buffer</Text>
            <Text fontSize="18px">
              A Start Page is a beautiful, flexible, mobile-friendly landing page that you can build in minutes and update in seconds

            </Text>
          </Box>
          <Image mt="-10%" h="500px" w="100%" src="https://login.buffer.com/img/sp-login-image.png" />
        </Container>

      </Flex>
    </div>

  );
}

export default Login;


