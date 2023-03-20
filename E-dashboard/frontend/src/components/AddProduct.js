import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [error, setError]=useState(false);

    const navigate=useNavigate();

    const collectData=async()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }

        console.warn(name,price,category,company);
        const userId=await JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result=await fetch("http://localhost:5000/add-product",{
            method:"post",
            body: JSON.stringify({name,price,category,company,userId}),
            headers: {"content-type":"application/json"}
        })
        result = await result.json();
        console.warn(result);
        navigate('/');
    }

    return(
        <div className="add-product sign_up">
            <h2>Add Product Here!!</h2>
            <div className="input_">
                <input type="text" className="inputbox" value={name} 
                onChange={(e)=>(setName(e.target.value))} placeholder="Enter Product Name" />
                {error && !name && <span className="error_txt">Enter valid name</span>}
            </div>
            <div className="input_">
                <input type="text" className="inputbox" value={price} 
                onChange={(e)=>(setPrice(e.target.value))} placeholder="Enter Price" />
                {error && !price && <span className="error_txt">Enter valid price</span>}
            </div>
            <div className="input_">
                <input type="text" className="inputbox" value={category} 
                onChange={(e)=>(setCategory(e.target.value))} placeholder="Enter Category" />
                {error && !category && <span className="error_txt">Enter valid category</span>}
            </div>
            <div className="input_">
                <input type="text" className="inputbox" value={company} 
                onChange={(e)=>(setCompany(e.target.value))} placeholder="Enter Company" />
                {error && !company && <span className="error_txt">Enter valid company</span>}
            </div>
            <button className="signup_btn" onClick={collectData}>Add Product</button>
        </div>
    );
}

export default AddProduct;