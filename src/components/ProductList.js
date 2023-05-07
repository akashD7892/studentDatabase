import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList=()=>{
    const [products, setProducts] = React.useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        let result = await fetch('http://127.0.0.1:5000/products',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }
    const deleteProduct = async(id)=>{
        console.warn(id);
        let result = await fetch(`http://127.0.0.1:5000/product/${id}`,{
            method:"Delete",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if(result){
            getProducts();
        } 
    }

    const searchHandle = async(event)=>{
    console.warn(event.target.value);
    let key = event.target.value;

    if(key){
        let result = await fetch(`http://127.0.0.1:5000/search/${key}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if( result ){
            setProducts(result)
        }
    }else {
        getProducts();
    }
    
    }

    
  return(
    <div className='product-list'>
        <h3>Student List</h3>
        <input type="text" placeholder='Search' className='search-product-box'
        onChange = {searchHandle}/>
        <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Rollno</li>
        <li>Branch</li>
        <li>Operation</li>
        </ul>
        {
            products.length > 0 ? products.map((item,index)=>
                <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li><button onClick={()=> deleteProduct(item._id)}>Delete</button>
                <Link to={"/update/"+item._id}>Update</Link>
                </li>
            </ul>   
            )
            :
            <h1>No Result</h1>
        } 
    </div>
  )
}
export default ProductList ;