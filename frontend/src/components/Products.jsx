import React, { useState, useEffect } from "react";
import "../assets/CSS/products.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { getProducts } from "../scripts/products/products";
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const [deals, setDeals] = useState([]);

  useEffect(async () => {
    const res = await getProducts();
    console.log(res.data.data);
  }, []);

  // To do on this page
  // add the loader on this page once page is loaded then show the deals else only show the loader gif
  // map the products on the page
  // add infinite scroll if possible
  // handle if no deals has been recieved in the response that is handle empty deals page

  const Loading = () => {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <Skeleton height={350} />
            </div>

            <div className="col-md-4">
              <Skeleton height={350} />
            </div>

            <div className="col-md-4">
              <Skeleton height={350} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = deals.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return <div></div>;
  };

  return (
    <div>
      <div className="container">
        {/* {loading ? <Loading /> : <ShowProducts />} */}
        <h1>Products</h1>
        <ShowProducts />
      </div>
    </div>
  );
};

export default Product;
