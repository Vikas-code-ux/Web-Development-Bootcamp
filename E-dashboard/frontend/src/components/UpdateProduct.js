import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");

    const params=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        getProd_details();
    },[])

    const getProd_details=async()=>{
        let result=await fetch(`http://localhost:5000/products/${params.id}`);
        result=await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct=async()=>{
        console.warn(name,price,category,company);
        let result=await fetch(`http://localhost:5000/products/${params.id}`,{
            method:"PUT",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result=await result.json();
        console.warn(result);
        navigate('/');
    }

    return(
        <div className="add-product sign_up">
            <h2>Update Product Here!!</h2>
            <div className="input_">
                <input type="text" className="inputbox" value={name} 
                onChange={(e)=>(setName(e.target.value))} placeholder="Enter Product Name" />
            </div>
            <div className="input_">
                <input type="text" className="inputbox" value={price} 
                onChange={(e)=>(setPrice(e.target.value))} placeholder="Enter Price" />
            </div>
            <div className="input_">
                <input type="text" className="inputbox" value={category} 
                onChange={(e)=>(setCategory(e.target.value))} placeholder="Enter Category" />
            </div>
            <div className="input_">
                <input type="text" className="inputbox" value={company} 
                onChange={(e)=>(setCompany(e.target.value))} placeholder="Enter Company" />
            </div>
            <button className="signup_btn" onClick={updateProduct}>Update Product</button>
        </div>
    );
}

export default UpdateProduct;