import React from 'react'
import axios from "axios";

function updatePassword() {
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    // API integration of the update oassword field
    const handleUpdatePassword = async (e) => {
        // user useParams to extract the userId and passwordResetToken from the link
        // this link will be like this `http://localhost:5000/password-reset/63cfff8b5863d9f59aba55ae/528c27b938b07c6cf8d5c76a50368fd007afa70b471127204ab1ea76d2a61301` in which http://localhost:5000/password-reset/:userId/:passwordResetToken
        const res = await axios.post(`http://localhost:5000/api/password-reset/changepassword/${userId}/token/${passwordResetToken}`, {
          password: password,
          confirmPassword: confirmPassword
        });
      };
    //   TO DO on this page
    // you have to add a form with two fields one for new password and another for confirm password
    // you have to extract the params from url to send to our request research about it and do it by urself
    // on hitting the reset password button on success user should get redirected to the login page
  return (
    <div>updatePassword</div>
  )
}

export default updatePassword