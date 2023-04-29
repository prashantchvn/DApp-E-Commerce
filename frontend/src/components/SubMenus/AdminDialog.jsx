import React from "react";
import { Link } from "react-router-dom";

function AdminDialog() {
  return (
    <div className="grid grid-cols-5 gap-0">
      <div>
        <h1 className="font-bold text-md categories-heading mb-2">ADMIN</h1>
        <ul className="block">
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/admin/dashboard"
            >
              DASHBOARD
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/admin/inventory"
            >
              INVENTORY
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/admin/users"
            >
              USERS
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default AdminDialog;
