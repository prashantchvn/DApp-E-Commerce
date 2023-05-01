import React, { useState, useEffect } from "react";
import { validateUser } from "../../scripts/Auth";
import { Link } from "react-router-dom";

function Inventory() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUserAuthenticity = async () => {
      await validateUser().then((data) => {
        setIsAdmin(data.data.isAdmin);
      });
    };

    checkUserAuthenticity();
  }, []);

  if (isAdmin) {
    return (
      <div className="my-16 w-full">
        <button className="fixed right-20 text-white px-3 tracking-wider py-2 bg-black MaisonNeueMonoRegular">
          Create
        </button>x
      </div>
    );
  } else {
    return (
      <div className="text-center w-full my-60 py-8 ">
        <h3 className="MaisonNeueMonoRegular py-4 text-2xl tracking-wider">
          Not Authorized user
        </h3>
        <Link className="MaisonNeueMonoRegular text-md tracking-wider" to="/">
          GO BACK TO HOME.....
        </Link>
      </div>
    );
  }
}

export default Inventory;
