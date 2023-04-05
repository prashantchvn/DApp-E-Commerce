import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import video from "../assets/videos/high.mp4"

const Home = () => {
  const [season, setSeason] = useState({
    title: 'Summer',
    description: 'Welcome to a new season; our summer collection features items for adventure, elevated casual wear, and protection ',
    link: 'summer'
  })

  return (
    <div className='mt-10'>
      <div className="w-full">
        <video className="relative" loop autoPlay muted title="People walking along sand dunes." >
        <source src={video} type="video/mp4" />
        </video>
        <div className="poster w-4/12 ml-12">
          <h1 className="text-white text-bold text-5xl">{season.title} is here.</h1>
          <p className="text-white text-thin text-sm tracking-widest season-description w-5/6 mt-2">{season.description}</p>
          <button className="rounded-full border px-4 align-middle h-10 uppercase mt-2 border-2 border-white">
            <p className="text-white text-xs tracking-widest">Exlore new {season.title} style</p>
          </button>
        </div>
      </div>
    </div>

  )

}
export default Home
