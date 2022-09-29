import {Route, Routes} from "react-router-dom";
import React from "react";

const AllRouter =() =>{
    return (
        <>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/customers" element={<Costomers/>}></Route>
          </Routes>
        </>
    )
}

export default AllRouter;