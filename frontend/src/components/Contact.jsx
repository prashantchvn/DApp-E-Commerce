import React from 'react'
import "./contact.css";
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <div >
            <div className='mt-5 contact'>
                <div className="box3">
                    <div className='add'>
                        <HiLocationMarker className="ico" color="black" size={35} />
                        <h3 className='text-center'>ADDRESS</h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur . </p>
                    </div></div>

                <div className="box3">
                    <div className='add'>
                        <BsFillTelephoneFill className="ico" color="black" size={35} />
                        <h3 className='text-center'>PHONE </h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur . </p>
                    </div></div>

                <div className="box3">
                    <div className='add'>
                        <FaFax className="ico" color="black" size={35} />
                        <h3 className='text-center'>FAX</h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur . </p>
                    </div></div>

                <div className="box3">
                    <div className='add'>
                        <div className='text-center'>
                            <MdEmail className="ico" color="black" size={35} />
                        </div>

                        <h3 className='text-center'>EMAIL</h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur . </p>
                    </div>
                </div>
            </div>
            <h1 className='mt-5 text-center'>GET IN TOUCH</h1>
            <div className='box2 mt-5'>
                <label className="mt-4" for="exampleInputEmail1">Name</label>
                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />

                <label className="mt-4" for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                <label className="mt-4" for="exampleInputEmail1">Phone Number</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
               
                <label className="mt-4">Message</label>
                <textarea placeholder="Message" class="form-control" rows="4"></textarea>
                <div className='text-center mt-5'>
                    <button className='button1'>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
