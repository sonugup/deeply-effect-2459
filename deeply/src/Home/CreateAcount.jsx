

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './Creat.css';
 
// function Form() {
//     // let dataform=
//     const [email , setEmail] = useState('');
//     const [password , setPassword] = useState('');
//     const [confPassword , setConfPassword] = useState('');
 
//     const handleEmailChange =(e)=>{
//       setEmail(e.target.value);
//     }
      
//     const handlePasswordChange =(e)=>{
//       setPassword(e.target.value);
//     }
     
//     const handleConfPasswordChange =(e)=>{
//       setConfPassword(e.target.value);
//     }
    
//     const handleSubmit=(e)=>{
//       if(password!=confPassword)
//       {
        
//         alert("password Not Match");
//       }
//       else{
        
        
//         let data=(email, password)
//         localStorage.setItem("data", JSON.stringify(data))
//       }
//       e.preventDefault();
 
//     }
//   return (
//     <div className="Form">
//     <header className="Form-header">
//     <form onSubmit={(e) => {handleSubmit(e)}}>
//      {/*when user submit the form , handleSubmit()
//         function will be called .*/}
    
    
//         <label>
//           Email:
//         </label><br/>
//         <input type="email" value={email} required onChange={(e)  => {handleEmailChange(e)}} /><br/>
//           {/* when user write in email input box , handleEmailChange()
//               function will be called. */}
//         <label>
//           Password:
//         </label><br/>
//         <input type="password" value={password} required onChange={(e)   => {handlePasswordChange(e)}} /><br/>
//               {/* when user write in password input box ,
//                   handlePasswordChange() function will be called.*/}
//         <label>
//           Confirm Password:
//         </label><br/>
//         <input type="password" value={confPassword} required onChange={(e)   => {handleConfPasswordChange(e)}} /><br/>
//                 {/* when user write in confirm password  input box ,
//                     handleConfPasswordChange() function will be called.*/}
//         <input type="submit" value="Submit"/>
//       </form>
//     </header>
//     </div>
//   );
// }
 
// export default Form;




// // import React from "react";

// // const Acount= ()=>{
// //     return (
// //         <>
// //         </>
// //     )
// // }

// // export default Acount;


// // function errorMessageExample() {
// //     const [input, setInput] = useState('')
  
// //     const handleInputChange = (e) => setInput(e.target.value)
  
// //     const isError = input === ''
  
// //     return (
// //       <FormControl isInvalid={isError}>
// //         <FormLabel>Email</FormLabel>
// //         <Input
// //           type='email'
// //           value={input}
// //           onChange={handleInputChange}
// //         />
// //         {!isError ? (
// //           <FormHelperText>
// //             Enter the email you'd like to receive the newsletter on.
// //           </FormHelperText>
// //         ) : (
// //           <FormErrorMessage>Email is required.</FormErrorMessage>
// //         )}
// //       </FormControl>
// //     )
// //   }

import React from 'react'

export default function CreateAcount() {
  return (
    <div>CreateAcount</div>
  )
}
