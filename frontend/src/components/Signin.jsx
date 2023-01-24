import React, { useState } from "react";
import { Divider, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";

const Signin = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const register = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/register", {
      name: name,
      email: email,
      phoneNo: phone,
      password: password
    });
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
            onChange={(e)=>{
                setName(e.target.value)
            }}
            margin="normal"
            type={"text"}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            margin="normal"
            type={"email"}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            onChange={(e)=>{
                setPhone(e.target.value)
            }}
            margin="normal"
            type={"phone"}
            id="outlined-basic"
            label="Phone No"
            variant="outlined"
          />
          <TextField
            fullWidth
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
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
