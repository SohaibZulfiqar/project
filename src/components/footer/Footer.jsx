import React, { useEffect } from 'react'
import './Footer.css'
// import video2 from'../video2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className='footer' >
      <div className="videoDiv">
        <video src="../video2.mp4" loop autoPlay type="video/mp4"></video>
      </div>


      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Teavel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email' />
            <button data-aos="fade-up" className='btn flex' type='submit' >
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="row">
            <div className="col-md-6">
              <div className="footerIntro flex">
                <div className="logoDiv">
                  <a href="#" className='logo flex' >
                    <MdOutlineTravelExplore className="icon" /> Travel.
                  </a>
                </div>
                <div data-aos="fade-up" className="footerParagraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam numquam debitis nobis, iure tempore iste, excepturi cumque dolor sunt id magnam expedita voluptate voluptates. Voluptatum consectetur culpa fuga amet consequatur a blanditiis similique, eligendi ipsum cumque deleniti sequi mollitia modi repellat nihil porro eius nulla incidunt? Debitis, laudantium quod.
                </div>
                <div data-aos="fade-up" className="footerSocials">
                  <AiOutlineTwitter className="icon" />
                  <AiFillYoutube className="icon" />
                  <AiFillInstagram className="icon" />
                  <FaTripadvisor className="icon" />
                </div>
              </div>
            </div>
            <div className="col-md-2">
              {/* Group one */}
              <div className="footerLinks grid">
                <div data-aos="fade-up"
                  data-aos-duration="3000" className="linkGroup">
                  <span className="groupTitle">
                    OUR AGENCY
                  </span>
                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Services
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Insurance
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Agency
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Toursim
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Payment
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              {/* Group Two */}
              <div className="footerLinks grid">
                <div data-aos="fade-up" data-aos-duration="4000"
                  className="linkGroup">
                  <span className="groupTitle">
                    PARTNER
                  </span>
                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Bookings
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Rent Cars
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Hostel World
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Trivago
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    TripAdvisor
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              {/* Group three */}
              <div className="footerLinks grid">
                <div data-aos="fade-up"
                  data-aos-duration="5000" className="linkGroup">
                  <span className="groupTitle">
                    LAST MINUTE
                  </span>
                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    London
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    California
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Indonesia
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Europe
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon' />
                    Oceania
                  </li>
                </div>
              </div>
            </div>
          </div>







          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHT RESERVED - SOHAIB 2023</small>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
