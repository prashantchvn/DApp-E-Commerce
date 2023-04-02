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
    <navbar className="flex justify-between align-middle -mb-6 mx-12 my-8 sticky top-0 cursor-pointer">
      <div className="">
        {/* left side of the menu */}
        <button className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm" to="#">MEN</button>
        <button className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm" to="#">WOMEN</button>
        <button className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm" to="#">KIDS</button>
        <button className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm" to="#">EXPLORE</button>
      </div>
      <div classname="">
      <Link to="/"><h1 className="font-black text-3xl no-underline Logo">AGES</h1></Link>
      </div>
      <div className="flex">
        <img className="mx-8" src={Search}/>
        <img className="mx-8" src={Profile} />
        <button className="mx-4 rounded-full border px-3 h-10 mt-2 border-2 border-slate-950">{cartCount}</button>
      </div>
    </navbar>
  );
}

export default NavScrollExample;
