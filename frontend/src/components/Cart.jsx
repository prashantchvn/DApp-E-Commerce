import React from 'react'
import "../assets/CSS/cart.css"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
const Cart = () => {
    return (
        <div>
            <div className='cart'>
                <section className='section-p1 mt-5 text-center'>
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>Remove</td>
                                <td>Image</td>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Subtotal</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href=""><CancelRoundedIcon /></a></td>
                                <td>Ninja T-Shirt</td>
                                <td>Rs : 180</td>
                                <td><input type="number" value="1" /></td>
                                <td>Rs : 180</td>
                            </tr>
                            <tr>
                                <td><a href=""><CancelRoundedIcon /></a></td>
                                <td>Ninja T-Shirt</td>
                                <td>Rs : 180</td>
                                <td><input type="number" value="1" /></td>
                                <td>Rs : 180</td>
                            </tr>
                            <tr>
                                <td><a href=""><CancelRoundedIcon /></a></td>
                                <td>Ninja T-Shirt</td>
                                <td>Rs : 180</td>
                                <td><input type="number" value="1" /></td>
                                <td>Rs : 180</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            <section >
                <div className="checkout mt-5 ">
                    <h1>ORDER SUMMERY</h1>
                    <div className="row">
                        <div className="col-sm">
                            <text> SubTotal </text><br />
                            <text> Estimeted Shipping </text><br />
                            <text> Estimeted Total </text><br />
                        </div>
                        <div className="col-sm col-2">
                            <text> 180 </text><br />
                            <text>  0.00 </text><br />
                            <text> Rs : 180</text><br />
                        </div>
                    </div>
                    <div className='checbutton'>
                        <button>Checkout</button>
                    </div>



                </div>

            </section>
        </div>
    )
}

export default Cart