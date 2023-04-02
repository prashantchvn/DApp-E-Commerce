import React, { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFax } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');


    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 2500);

    }
    const contact = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/api/contact-us", {
            name: name,
            email: email,
            phone: phone,
            message: message
        });
        if (name && email && phone && message) {
            toast.success('Saved Message Sucessfully', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        else if (name === "" || email === "" || phone === "" || message === "") {
            toast.error('Something Is Wrong  !', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
    }


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
            <form onSubmit={contact}>

                <div className='box2 mt-5'>
                    <label className="mt-4" for="exampleInputEmail1">Name</label>
                    <input onChange={(e) => { setname(e.target.value) }} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />

                    <label className="mt-4" for="exampleInputEmail1">Email address</label>
                    <input onChange={(e) => { setemail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                    <label className="mt-4" for="exampleInputEmail1">Phone Number</label>
                    <input onChange={(e) => { setphone(e.target.value) }} type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />

                    <label className="mt-4">Message</label>
                    <textarea onChange={(e) => { setmessage(e.target.value) }} type="message" placeholder="Message" class="form-control" rows="4"></textarea>
                    <div className='text-center mt-5'>
                        <button onClick={refreshPage} className='button1'>SEND MESSAGE</button>
                        <ToastContainer />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Contact
