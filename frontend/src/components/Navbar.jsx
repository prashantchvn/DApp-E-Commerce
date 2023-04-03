import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Icons/search.svg";
import Profile from "../assets/Icons/profile.svg";
import Close from "../assets/Icons/close.svg";
import MensMenu from "./SubMenus/MensMenu";
import WomensMenu from "./SubMenus/WomensMenu";
import KidsMenu from "./SubMenus/KidsMenu";
import ExploreMenu from "./SubMenus/ExploreMenu";
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
      <dialog
        className="w-full absolute inset-x-0 top-20 pt-10 z-50 px-20 pointer-cursor"
        open={open}
      >
        <button onClick={() => setDialog("")}>
          <img src={Close} className="h-8 w-8 right-6 absolute top-5" />
        </button>
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
      <Dialog open={dialog == "men"}>
        <MensMenu />
      </Dialog>
      <Dialog open={dialog == "women"}>
        <WomensMenu />
      </Dialog>
      <Dialog open={dialog == "kids"}>
        <KidsMenu />
      </Dialog>
      <Dialog open={dialog == "explore"}>
        <ExploreMenu />
      </Dialog>
    </div>
  );
}

export default NavScrollExample;
