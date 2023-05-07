import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError]= React.useState(false);

    const navigate = useNavigate();

    const addProduct=async()=>{ 

        if( !name || !price || !company || !category )
        {   
            setError(true);
            return false;
        }
        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result =await fetch("http://127.0.0.1:5000/add-product",{
           method:'post',
           body:JSON.stringify({name,price,category,company,userId}),
           headers:{
            "Content-Type":"application/json",
             authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            
           }
        });
        result =await result.json();
        
        console.warn(result);
        navigate("/show");
    }   


    return (
        <div className='product'>
            <h1>Add Student</h1>
            <input type='text' placeholder="Enter Student Name" className='inputBox'
            value={name} onChange = {(e) =>{setName(e.target.value)}}
            />
            { error && !name &&<span className="invalid-input">Enter Valid Name</span>}

            <input type='text' placeholder="Enter Rollno" className='inputBox'
            value={price} onChange = {(e) =>{setPrice(e.target.value)}}
            />
            { error && !price &&<span className="invalid-input">Enter Valid price</span>}

            <input type='text' placeholder="Enter Branch" className='inputBox'
            value={category} onChange = {(e) =>{setCategory(e.target.value)}}
            />
            { error && !category &&<span className="invalid-input">Enter Valid category</span>}

            <input type='text' placeholder="Enter Interest" className='inputBox'
            value={company} onChange = {(e) =>{setCompany(e.target.value)}}
            />
            { error && !company &&<span className="invalid-input">Enter Valid company</span>}

            <button onClick={addProduct} className='appButton'>Add Student</button>
        </div>
    )
}

export default AddProduct ;