import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
// useNavigate is a hook in react-dom
const Nav=()=>{
    const auth = localStorage.getItem('user') ;
    const navigate = useNavigate();

    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    
    return (
        <div className='navBar'>
            <img alt='logo' className='logo'
            src={require("./images/reclogo.jpeg")}
           ></img>
            { 
              auth?

            <ul className='navul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/show">Students</Link></li>
                <li><Link to="/add">AddStudentDetails</Link></li>
                <li><Link to="/update">Update Details</Link></li>
                <li><Link onClick={logout}to="/signup">logout {(JSON.parse(auth).name)}</Link></li>
                </ul>:
               <ul className="navul nav-right">
                <li><Link to="/signup">SignUp</Link></li> 
                <li><Link to="/login">Login</Link></li> 
               </ul>
}
            
        </div>
        //when logout , logout function will work and clear local data and direct it to signup page
    )
}

export default Nav;