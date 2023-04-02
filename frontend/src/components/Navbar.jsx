import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Icons/search.svg";
import Profile from "../assets/Icons/profile.svg";
import Close from "../assets/Icons/close.svg";
function NavScrollExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [dialog, setDialog] = useState("");

  const logout = () => {
    localStorage.removeItem("AuthToken");
    // show toast on the logout button
  };

  const Dialog = ({ open, children }) => {
    return (
      <dialog className="w-full absolute inset-x-0 top-20 pt-10 z-50 px-20 pointer-cursor" open={open}>
        <button onClick={()=> setDialog('')}><img src={Close} className="h-8 w-8 right-6 absolute top-5"/></button>
        {children}
      </dialog>
    );
  };

  return (
    <div>
      <navbar className="flex justify-between align-middle -mb-6 mx-12 my-8 sticky top-0 cursor-pointer">
        <div className="">
          {/* left side of the menu */}
          <button
            onClick={() => {
              setDialog("men");
            }}
            className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm"
            to="#"
          >
            MEN
          </button>
          <button
            className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm"
            onClick={() => {
              setDialog("women");
            }}
            to="#"
          >
            WOMEN
          </button>
          <button
            className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm"
            onClick={() => {
              setDialog("kids");
            }}
            to="#"
          >
            KIDS
          </button>
          <button
            onClick={() => {
              setDialog("explore");
            }}
            className="px-6 py-3 tracking-wider hover:bg-black hover:text-white hover:rounded-sm"
            to="#"
          >
            EXPLORE
          </button>
        </div>
        <div classname="">
          <Link to="/">
            <h1 className="font-black text-3xl no-underline Logo">AGES</h1>
          </Link>
        </div>
        <div className="flex">
          <img className="mx-8" src={Search} />
          <img className="mx-8" src={Profile} />
          <button className="mx-4 rounded-full border px-3 h-10 mt-2 border-2 border-slate-950">
            {cartCount}
          </button>
        </div>
      </navbar>
      <Dialog open={dialog == 'men'}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h1 className="font-bold text-lg tracking-widest">FEATURED</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div> 
          <div>
            <h1 className="font-bold text-lg tracking-widest">CLOTHING</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-widest">ACCESSORIES</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-widest">SNOW</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div>
        </div>
      </Dialog>
      <Dialog open={dialog == 'women'}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h1 className="font-bold text-lg tracking-widest">FEATURED</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div> 
          <div>
            <h1 className="font-bold text-lg tracking-widest">CLOTHING</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </Dialog>
      <Dialog open={dialog == 'kids'}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h1 className="font-bold text-lg tracking-widest">FEATURED</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div> 
          <div>
            <h1 className="font-bold text-lg tracking-widest">CLOTHING</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-widest">ACCESSORIES</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div>
          <div>
          </div>
        </div>
      </Dialog>
      <Dialog open={dialog == 'explore'}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <h1 className="font-bold text-lg tracking-widest">FEATURED</h1>
            <ul className="block">
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
              <li><Link className="text-sm tracking-wider" to="/explore/men">EXPLORE MEN'S</Link></li>
            </ul>
          </div> 
          <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default NavScrollExample;
