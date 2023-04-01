import React, {useState} from "react";
import axios from "axios";

function ForgotPassword() {
    const [email,setEmail] = useState('');
  // API Call to handle the forgot password request
  const handleForgotPassword = async (e) => {
    const res = await axios.post("http://localhost:5000/api/password-reset", {
      email: email,
    });
  };
  
    // To do : 
    // 1. add one form with one input field and on submit this function should get fired
    // based on the response show error messages and other things
    // on the success response show the toast with reset password link sent on the email and redirect to login page

  return <div>
    <h1>Forgot password</h1>
  </div>;
}

export default ForgotPassword;
