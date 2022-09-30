
import React from 'react';

import Footer from './Components/Footer';


import Navbar from './Components/Navbar';

import AllRouter from './Router/AllRouter';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRouter/>
       {/* <About/> */}
       {/* <Form/> */}
      {/* <Home/> */}
      <Footer/>
    </div>
  );
}

export default App;
