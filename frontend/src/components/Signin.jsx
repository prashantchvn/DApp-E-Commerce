import React, { useState } from "react";
import { Divider, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import { toast } from 'react-toastify';

const Signin = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateEmail(email) {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Invalid email address");
      return false;
    }
    
    return true;
  }

  function validatePassword(password) {
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      return false;
    }
   
    return true;
  }

  function validatePhone(phone) {
    if (phone.length <= 10) {
      toast.error("Enter Valid Phone Number ", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      return false;
    }
   
    return true;
  }
  function validateName(name) {
    if (name.length < 2) {
      toast.error("Enter Valid Name", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      
      return false;
    }
   
    return true;
  }

  function register(event) {
    event.preventDefault();
    if (validateEmail(email) && validatePassword(password) && validateName(name) && validatePhone(phone)){
      toast.success("Form submitted successfully!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      const register = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/api/register", {
          name: name,
          email: email,
          phoneNo: phone,
          password: password
        });
      }
    }
    

  };

  return (
    <div>
      <form onSubmit={register}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={450}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          marginBottom={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            Sign In
          </Typography>

          <TextField
            fullWidth
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            margin="normal"
            type={"text"}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />

          <TextField
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            margin="normal"
            type={"email"}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />


          <TextField
            fullWidth
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            value={phone}
            margin="normal"
            type={"phone"}
            id="outlined-basic"
            label="Phone No"
            variant="outlined"
          />
          <TextField
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
            margin="normal"
            type={"password"}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />

          <Button
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
           
          >
            SignIn
          </Button>
          <Button sx={{ marginTop: 3, marginBottom: 3, borderRadius: 3 }}>
            <Link to="/login">Alrady Have An Account? Login IN </Link>
          </Button>
          <Divider>OR</Divider>
          <div className="mt-3">
            <FacebookSharpIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
            <GoogleIcon fontSize="large" />
          </div>
        </Box>
      </form>
    </div>
  );
};

export default Signin;
