import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

const ProductList=()=>{
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        let result=await fetch('http://localhost:5000/products');
        result=await result.json();
        setProducts(result);
    }
    // console.warn("products",products);

    const deleteProduct=async(id)=>{
        // console.warn(id);
        let result=await fetch(`http://localhost:5000/products/${id}`,{
            method:'Delete'
        });
        result=result.json();
        if(result){ getProducts(); }
    }

    const handle_search=async(event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`http://localhost:5000/search/${key}`);
            result=await result.json();
            if(result) setProducts(result);
        }else{
            getProducts();
        }
    }

    return(
        <div className="prod_list">
            <Scrollbars style={{ width: "100%", height: 450 }}>
            <h2>Products List Here!!</h2>
            <input type="text" className="search_prod_box" onChange={handle_search} placeholder="Search Product"/>
            <ul className="prod_head">
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length>0 ? products.map((item,index)=>
                <ul key={item._id} className="products_">
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>
                        <button className="delbutton" onClick={()=>deleteProduct(item._id)}><img className="delicon" border="0" src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="delete"/></button>
                        <Link className="updatebtn" to={'/update/'+item._id}><img className="delicon" src="https://cdn-icons-png.flaticon.com/512/3124/3124772.png" alt="update"/></Link>
                    </li>
                </ul>
                )
                :
                <h2>No Product Found!!</h2>
            }
            </Scrollbars>
        </div>
    )
}

export default ProductList;