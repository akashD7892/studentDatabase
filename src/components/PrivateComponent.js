import React from 'react'
import { Navigate,Outlet} from 'react-router-dom';

const PrivateComponent = () =>{
    const auth = localStorage.getItem('user') 
    // if author would be sign up then he get access of other sites as product sales etc
    return auth?<Outlet/>:<Navigate to="/signup"/>
}
export default PrivateComponent;
