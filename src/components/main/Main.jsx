import React,{useEffect} from 'react'
import './Main.css'
// Let me import images
import{HiOutlineLocationMarker} from 'react-icons/hi'
import{HiOutlineClipboardCheck} from 'react-icons/hi'

import  Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
{

id:1,
imgSrc:'img.jpg',
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX ',
fees: '$700',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:2,
imgSrc: './img 2.jpg',
destTitle: 'Machu Picchu',
location: 'Peru',
grade: 'CULTURAL RELAX ',
fees: '$600',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:3,
imgSrc: './img 3.jpg',
destTitle: 'Great Barrier Reef',
location: 'Australia',
grade: 'CULTURAL RELAX ',
fees: '$700',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:4,
imgSrc: './img 4.jpg',
destTitle: 'Cappadocia',
location: 'Turkey',
grade: 'CULTURAL RELAX ',
fees: '$800',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:5,
imgSrc: './img 5.jpg',
destTitle: 'Guanajuato',
location: 'Mexico',
grade: 'CULTURAL RELAX ',
fees: '$1100',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:6,
imgSrc: './img 6.jpg',
destTitle: 'Cinque Terre',
location: 'Italy',
grade: 'CULTURAL RELAX ',
fees: '$840',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:7,
imgSrc: './img 7.jpg',
destTitle: 'Angkor Wat',
location: 'Cambodia',
grade: 'CULTURAL RELAX ',
fees: '$790',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:8,
imgSrc: './img 8.jpg',
destTitle: 'Taj Mahal',
location: 'India',
grade: 'CULTURAL RELAX ',
fees: '$700',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},
{

id:9,
imgSrc: './img 9.jpg',
destTitle: 'Bali Island',
location: 'Indonesia',
grade: 'CULTURAL RELAX ',
fees: '$500',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
},

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <section className='main container section' >
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid ">
{/* here we are using high order array  we use a list of objects in one array i am going to create an array name data and from that we shall .map() */}
     
     
     {
      Data.map(({id, imgSrc,destTitle,location,grade,fees,description })=>{
        return(
          <div key={id}
          data-aos="fade-up" className="singleDestination">
            {/* here it will return single id */}

            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className='icons' />
                <span className="name">{location}</span>
              </span>
              
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p></div>
            
            <button className='btn flex' >
              DETAILS<HiOutlineClipboardCheck className="icon"/>
            </button>
            </div>
          </div>
        )
     })
    }
      </div>

    </section>
    )
}

export default Main
