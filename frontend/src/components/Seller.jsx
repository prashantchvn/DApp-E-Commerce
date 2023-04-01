import React from 'react'
import "../assets/CSS/seller.css"
import PaidIcon from '@mui/icons-material/Paid';
const Seller = () => {
  return (
    <div>
      <div className='bg'>
        <div className='poster'>
          <h1 className='head'>Sell our product's online to customers at<br />
            <span> 0% Commission</span></h1>
          <h5>Become a Online seller and grow your business across India</h5>
          <div className='btn2 text-center'>
            <button >Start Selling</button>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className='row row1 '>
            <div className="col-sm boxseller1">
              <h1>Why Suppliers Love Us</h1>
              <span>All the benefits that come with selling on Website are designed to help you sell more, and make it easier to grow your business.</span>
            </div>
            <div className="col-sm boxseller">
              <div className='content'>
                <h4>0 % Commission Fee</h4>
                <span>Suppliers selling on website keep 100% of their profit by not paying any commission</span>
                <hr className="solid" />
              </div>
              <div className='content'>
                <h4>0 Penalty Charges</h4>
                <span>Sell online without the fear of order cancellation charges with 0 Penalty for late dispatch or order cancellations.</span>
                <hr className="solid" />
              </div>
              <div className='content'>
                <h4>Growth for Every Supplier</h4>
                <span>From small to large and unbranded to branded, all suppliers have grown their businesses on Meesho</span>
                <hr className="solid" />
              </div>
              <div className='content'>
                <h4>0 % Commission Fee</h4>
                <span>Suppliers selling on website keep 100% of their profit by not paying any commission</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>)
}

export default Seller
