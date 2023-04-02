import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Icons/search.svg";
import Profile from "../assets/Icons/profile.svg";

function NavScrollExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const logout = () => {
    localStorage.removeItem("AuthToken");
    // show toast on the logout button
  };

  return (
    <navbar className="flex">
      <div className="">
        {/* left side of the menu */}
        <Link to="#">MEN</Link>
        <Link to="#">WOMEN</Link>
        <Link to="#">KIDS</Link>
        <Link to="#">EXPLORE</Link>
      </div>
      <div classname="">
        <h1>AGES</h1>
      </div>
      <div classname="flex">
        <img src={Search} className=""/>
        <img src={Profile} />
        <button>{cartCount}</button>
      </div>
    </navbar>
  );
}

export default NavScrollExample;
