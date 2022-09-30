import { useContext } from "react";
import  AuthContest  from "../AuthContest/AuthContest";
import {Navigate} from "react-router-dom" ; 



function PrivateRoute({children}) {
    const state = useContext(AuthContest) ; 
    

    if(!state.authState.isAuth){
       return <Navigate to="/login"/>
    }
    return children 
}

export default PrivateRoute;