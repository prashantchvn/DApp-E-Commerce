import cloth1 from "../assests/shop1.jpg"
import cloth2 from "../assests/shop2.jpg"
import cloth3 from "../assests/shop3.jpg"
import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className="container">
      <h1 className='text-center about'>About Us</h1>
      <div className="row mt-5 text-center">
        <div className="col-sm">
          <h3 className="mt-5">Our Vision</h3>
          <text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias molestias non nulla consectetur labore, quia quidem nam sed quae quas? Deleniti nam veniam consequatur reprehenderit, omnis expedita eligendi ad!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab a, aut minima adipisci iure, et architecto perspiciatis iste recusandae eaque eos fugit nobis pariatur quis ea voluptates voluptatem, nesciunt modi?
          </text>
        </div>
        <div className="col-sm">
          <img src={cloth1} alt="" />
        </div>


      </div>
      <div className="row mt-5 text-center">

        <div className="col-sm">
          <img src={cloth2} alt="" />
        </div>
        <div className="col-sm">
          <h3 className="mt-5">Our Approach</h3>
          <text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias molestias non nulla consectetur labore, quia quidem nam sed quae quas? Deleniti nam veniam consequatur reprehenderit, omnis expedita eligendi ad!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab a, aut minima adipisci iure, et architecto perspiciatis iste recusandae eaque eos fugit nobis pariatur quis ea voluptates voluptatem, nesciunt modi?
          </text></div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-sm">
          <h3 className="mt-5">Our Process</h3>
          <text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias molestias non nulla consectetur labore, quia quidem nam sed quae quas? Deleniti nam veniam consequatur reprehenderit, omnis expedita eligendi ad!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab a, aut minima adipisci iure, et architecto perspiciatis iste recusandae eaque eos fugit nobis pariatur quis ea voluptates voluptatem, nesciunt modi?
          </text>
        </div>
        <div className="col-sm">
          <img src={cloth3} alt="" />
        </div>


      </div>
    </div>
  )
}

export default About
