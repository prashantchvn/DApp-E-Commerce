import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import "./signin.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const register = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/register", {
      name: name,
      email: email,
      phoneNo: phone,
      password: password
    });
    if(name && email &&  phone && password)
    {
      toast.success('Register Sucessfully', {
        position: toast.POSITION.BOTTOM_RIGHT
    });
    }
    else if(name=="" || email=="" || phone=="" || password=="")
    {
      toast.error('Something Is Wrong  !', {
        position: toast.POSITION.BOTTOM_RIGHT
    }); 
    }
  };
  return (
    <div>
      <form onSubmit={register}>
        <h1 className="mt-5 mb-5 text-center">Sign In</h1>
        <div className="box1">
          <label className="mt-4 " for="exampleInputPassword1">Full Name</label>
          <input onChange={(e)=>{ setName(e.target.value)}} type="name" className="form-control" id="exampleInputPassword1" placeholder="Enter Name" />
          <label className="mt-4" for="exampleInputPassword1">Email</label>
          <input  onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
          <label className="mt-4" for="exampleInputPassword1">Phone No</label>
          <input onChange={(e)=>{setPhone(e.target.value)}} type="phone" className="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number" />
          <label className="mt-4" for="exampleInputPassword1">Password</label>
          <input  onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
          <div className="mt-5 text-center">
            <button className="btnn">SIGNIN</button>
            <ToastContainer />
          </div>
          <div className="mt-4 mb-4 text-center">
            <Link to="/login">ALRADY HAVE AN ACCOUNT? LOGIN IN </Link>
          </div>
          <p className="text-center">OR</p>
          <div className="mt-3 mb-4 text-center">
            <FacebookSharpIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
            <GoogleIcon fontSize="large" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
