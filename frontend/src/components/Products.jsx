import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { getProducts } from "../scripts/products";
import { validateUser } from "../scripts/Auth";
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const [deals, setDeals] = useState([]);

  useEffect(async () => {
    const res = await getProducts();
    console.log(res.data.data);
    // api call to get info about user
    const user = await validateUser();
    console.log(user.data)
    setDeals(res.data.data);
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
    return (
      <div>
        {deals.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="wrapper">
                <div class="card h-90 text-center p-4" key={product.id}>
                  <img
                    src={product.images[0]}
                    class="card-img-top image"
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{product.productName}...</h5>
                    <p class="card-text lead fw-bold"> $ {product.price}</p>
                    <div className="middle">
                      <Link to="/product" state={product}>
                        <button className="btn btn-outline-dark me-2">
                          BUY NOW{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className='filter'>
          <div className='button  mt-5  pb-5'>
            <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("")}>Mens </button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("")}>Womens</button>
            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct('')}>kids</button>
          </div>
          <div>
            <div class="form-group has-search mt-5 ">
              <input type="text" class="form-control" placeholder="Type Something..." />
              <span>
                <button className='button2 ml-2' >search</button>
              </span>
            </div>
          </div>
        </div> */}
        {/* <>  <div className="container">

          <div className="row">
            {
              deals.map((product) => {
                return (
                  <div className="col-md-3 mb-4">
                    <div className="wrapper">
                      <div class="card h-90 text-center p-4" key={product.id} >
                        <img src={product.image} class="card-img-top image" alt={product.title} height="250px" />
                        <div class="card-body">
                          <h5 class="card-title mb-0">{product.productName}...</h5>
                          <p class="card-text lead fw-bold"> $ {product.price}</p>
                          <div className='middle'>
                            <Link to={"/product/" + product.id} state={product}><button className='btn btn-outline-dark me-2'>BUY NOW </button></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div></> */}
      </div>
    );
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
