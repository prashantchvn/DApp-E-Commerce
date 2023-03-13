import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation() 
  const product = location.state

  const [productData,setProductData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(()=>{
    // use useParams to get the product slug from the URL
    axios.get(`http://localhost:5000/api/products/${productSlug}`).then((res)=>{
      setProductData(res.data);
      setRelatedProducts(res.relatedProducts);
    }).catch((e)=>{
      console.log(e);
      // add toast to handle the exception
    })

  },[])

  const addToCart = async (e) => {
    
  }

  // build whole page based on the data comming from the api endpoints
  // add slideshow or any other solution for related products array

  return (
    <div>
      <h1>
        {product.name}
      </h1>
    </div>
  )
}

export default Product