import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

 const Login=()=> {
    const imageUrl =
    "https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
     return <> <img
     src={imageUrl}
     alt="light"
     style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
     /* or style={{ width: "calc(100%-20px)", margin: "10px" }} */
   /></>
}

export default Login