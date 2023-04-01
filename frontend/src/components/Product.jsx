import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation() 
  const product = location.state

  const [productData,setProductData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(()=>{
    // use useParams to get the product slug from the URL
    // axios.get(`http://localhost:5000/api/products/${productSlug}`).then((res)=>{
    //   setProductData(res.data);
    //   setRelatedProducts(res.relatedProducts);
    // }).catch((e)=>{
    //   console.log(e);
    //   // add toast to handle the exception
    // })

  },[])

  const addToCart = async (e) => {
    
  }

  // build whole page based on the data comming from the api endpoints
  // add slideshow or any other solution for related products array

  return (
    <div>
      <div className="container">
        <div className='mt-5'>
          {/* <ChevronLeftIcon style={{ fontSize: 30 }} /> Home <ChevronLeftIcon style={{ fontSize: 30 }} /> Products */}
        </div>

        <div className="row  mt-5">
          <div className="col-sm d-flex justify-content-center product_img">
            {/* <img src={first} alt="" /> */}
          </div>
          <div className="col-sm info">
            <p className='name'>Ninja T-Shirt</p>
            <p className='rate'>Rating : 3.4</p>
            <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eos perferendis laboriosam itaque, est soluta cumque numquam hic et ullam ut libero voluptatum dolore repellendus odio saepe dolor id omnis!</p>
            <p className='cat'>Category : Mens</p>
            <p className='price'>$25.50</p>
            <div className='mt-5 hover'>
              <button><span className='first'>Add To Cart</span>
                {/* <span className='second'><ShoppingCartRoundedIcon /></span> */}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
