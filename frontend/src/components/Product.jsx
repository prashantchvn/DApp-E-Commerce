import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import first from "../assests/12.png"
import "./product.css"
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Product = () => {
  return (
    <div>
      <div className='mt-5'>
        <ChevronLeftIcon style={{ fontSize: 30 }} /> Home <ChevronLeftIcon style={{ fontSize: 30 }} /> Products
      </div>

      <div className="row  mt-5">
        <div className="col-sm d-flex justify-content-center product_img">
          <img src={first} alt="" />
        </div>
        <div className="col-sm info">
          <p className='name'>Ninja T-Shirt</p>
          <p className='rate'>Rating : 3.4</p>
          <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eos perferendis laboriosam itaque, est soluta cumque numquam hic et ullam ut libero voluptatum dolore repellendus odio saepe dolor id omnis!</p>
          <p className='cat'>Category : Mens</p>
          <p className='price'>$25.50</p>
          <div className='mt-5 hover'>
            <button><span className='first'>Add To Cart</span>
              <span className='second'><ShoppingCartRoundedIcon /></span></button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
