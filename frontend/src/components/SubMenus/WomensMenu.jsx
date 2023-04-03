import React from 'react'
import { Link } from "react-router-dom";

function WomensMenu() {
  return (
    <div className="grid grid-cols-5 gap-0">
      <div>
        <h1 className="font-bold text-md categories-heading mb-2">FEATURED</h1>
        <ul className="block">
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              EXPLORE WOMEN'S
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              NEW STYLES
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              VIEW ALL
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              GIFT CARDS
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-md categories-heading mb-2">CLOTHING</h1>
        <ul className="block">
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              ALL CLOTHINGS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              INSULATED JACKETS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              NON-INSULATED JACKETS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              VESTS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              SWEATERS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              SWEATSHIRTS AND MIDLAYERS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              SHORT SLEEVE SHIRTS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              LONG SLEEVE SHIRTS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              PANTS AND SHORTS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              BASE LAYERS
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-md categories-heading mb-2">
          ACCESSORIES
        </h1>
        <ul className="block">
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              ALL ACCESSORIES
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              SHOES
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              SCARVES
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              SMALL HATS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              WATCHES
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              OTHERS
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-md categories-heading mb-2">SNOW</h1>
        <ul className="block">
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              ALL SNOW COLLECTION
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              JACKETS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              MIDLAYERS
            </Link>
          </li>
          <li>
            <Link
              className="text-xs tracking-wider hover:text-slate-400"
              to="/explore/men"
            >
              PANTS AND SHORTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WomensMenu