import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "./forgotpass.css"
import { Link } from 'react-router-dom';
const forgotpassword = () => {
    return (

        <div className="mb-5 ">
            <form >
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={500}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={2}
                    borderRadius={5}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc",
                        },
                    }}
                >
                    <p><ErrorOutlineIcon style={{ fontSize: 60 }} /></p>
                    <Typography variant="h5" textAlign="center">
                        Forgot Password
                    </Typography>
                    <div className='forgot'>
                        Enter Your Email and we'll send you a link to reset your password
                    </div>
                    <TextField
                        className='mt-4'
                        sx={{
                            width: 400
                        }}
                        margin="normal"
                        type={"text"}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                    />
                    <Button className='mt-4' color="success" variant="contained">Submit</Button>
                   
                    <div className='forgot-1 p-4'>
                    <Link to="/login"> <ChevronLeftIcon/>Back To Login</Link >
                    </div>
                    
                </Box>
            </form>
        </div>
    )
}

export default forgotpassword
