import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth) navigate('/');
    })

    const checklogin=async()=>{
        console.warn(email,password);
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{"content-type":"application/json"}
        });
        result=await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");
        }else{
            alert("Please enter correct details");
        }
    }
    return(
        <div className="login">
            <h2>Login Here!!</h2>
            <input className="inputbox" type="text" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Enter Email" />
            <input className="inputbox" type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="Enter Password" />
            <button className="signup_btn" onClick={checklogin}>Login</button>

        </div>
    )
}

export default Login;