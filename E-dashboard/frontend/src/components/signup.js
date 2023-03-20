import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [country,setCountry]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){ navigate('/')}
    })
    const collectData=async()=>{
        console.warn(name,email,password);
        if(name!=="" && email!=="" && password!==""){
            let result=await fetch('http://localhost:5000/signup',{
                method:'post',
                body: JSON.stringify({name,email,age,gender,country,password}),
                headers: {'content-type':'application/json'},
            });
            result=await result.json();
            console.warn(result);
            localStorage.setItem("user",JSON.stringify(result));
            if(result){
                navigate('/');
            }
        }
    }

    return(
        <div className="sign_up">
            <h2>Register below</h2>
            <input className="inputbox" value={name} onChange={(e)=>(setName(e.target.value))} type="text" placeholder="Enter Name"/>
            <input className="inputbox" value={email} onChange={(e)=>(setEmail(e.target.value))} type="text" placeholder="Enter Email"/>
            <input className="inputbox" value={age} onChange={(e)=>(setAge(e.target.value))} type="text" placeholder="Enter Age"/>
            <input className="inputbox" value={gender} onChange={(e)=>(setGender(e.target.value))} type="text" placeholder="Enter Gender"/>
            <input className="inputbox" value={country} onChange={(e)=>(setCountry(e.target.value))} type="text" placeholder="Enter Location(Country)"/>
            <input className="inputbox" value={password} onChange={(e)=>(setPassword(e.target.value))} type="password" placeholder="Enter Password"/>
            <button className="signup_btn" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;