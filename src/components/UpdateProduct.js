import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";   

const UpdateProduct = () =>{

    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate(); // its a hook to navigate to other link after changes
    
    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async()=>{
        console.warn(params)
        let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        
        result = await result.json();
        console.warn(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }
    const updateProduct=async()=>{ 
      console.warn(name,price,category,company)
      let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':'application/json',
             authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            
        }
    });
    result = await result.json();
    console.warn(result);
    navigate("/show");

    }   


    return (
        <div className='product'>
            <h1>Update Details</h1>
            <input type='text' placeholder="Enter Name" className='inputBox'
            value={name} onChange = {(e) =>{setName(e.target.value)}}
            />
           

            <input type='text' placeholder="Enter Rollno" className='inputBox'
            value={price} onChange = {(e) =>{setPrice(e.target.value)}}
            />
           
            <input type='text' placeholder="Enter Branch" className='inputBox'
            value={category} onChange = {(e) =>{setCategory(e.target.value)}}
            />
            

            <input type='text' placeholder="Enter Interest" className='inputBox'
            value={company} onChange = {(e) =>{setCompany(e.target.value)}}
            />
            
            <button onClick={updateProduct} className='appButton'>Update Details</button>
        </div>
    )
}


export default UpdateProduct ;