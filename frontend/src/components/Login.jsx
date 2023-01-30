import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
    if(res.data.user){
      console.log(res)
      localStorage.setItem('token', res.data.user)
    }
  };

  return (
    <div className="mb-5 ">
      <form onSubmit={handleLogin}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
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
            LOGIN
          </Typography>
          <img
            className="inline-block h-25 w-25 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <TextField
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            margin="normal"
            type={"text"}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            value={password}
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
            Login
          </Button>
          <ToastContainer />
          <div className="mt-4 mb-3">
            <FacebookSharpIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
            <GoogleIcon fontSize="large" />
          </div>
          <Divider>OR</Divider>
          <Button sx={{ marginTop: 2, borderRadius: 3 }}>
            <Link to="/signin">Need An Account? Sign In</Link>
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
