import React from "react";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import LoginIcon from '@mui/icons-material/Login';

import "react-toastify/dist/ReactToastify.css";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/login", {
      email: email,
      password: password
    });

    if (res.data.user) {
      toast.success('Login Sucessfully', {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      window.location.reload();
      localStorage.setItem('token', res.data.user)
    }
  };

  return (
    <div className="mb-5 ">
      <form onSubmit={handleLogin}>
        <h1 className="mt-5 mb-5 text-center">LOGIN</h1>
        <div className="box ">
          <div className="text-center ">
            <AccountCircleIcon sx={{ fontSize: "110px" }} />
          </div>

          <label className="mt-4" for="exampleInputEmail1">Email address</label>
          <input value={email}
            onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <label className="mt-4" for="exampleInputPassword1">Password</label>
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          <div className="mt-5 button text-center">
            <button >
              <span className="spa">LOGIN</span>
              <span className="spa1"><LoginIcon /></span>
              </button>
            <ToastContainer />
          </div>
          <div className="mt-4 text-center">
            <FacebookSharpIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
            <GoogleIcon fontSize="large" />
          </div>
          <p className="mt-4 text-center">OR</p>
          <div className="text-center">
            <Link to="/signin">Need An Account? Sign In</Link>
          </div>

        </div>


      </form>
    </div>
  );
};

export default Login;
