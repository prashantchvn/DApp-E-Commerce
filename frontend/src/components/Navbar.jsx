import { useState } from "react";
import "../assets/CSS/navbar.css";

function NavScrollExample() {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const logout = () => {
        localStorage.removeItem('AuthToken')
        // show toast on the logout button
    }

    return (
        <navbar>

        </navbar>
    );
}

export default NavScrollExample;