import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from "../assets/hero_image.png"
import logo from "../assets/logo1.png"
import "./Body.css"
const Body = () => {
  return (
    <>
    
    <div className='hero'>
      <div className="heroimage"><img src={heroimg} alt="" /></div>
      <div className='content'>
        <div className='title'>THE MED PORTAL</div>
        <Link to="/login" className='btn'>GET STARTED</Link> 
      </div>
    </div>

    <div className="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>01</h2>
            <h3>CREATE DIGITAL PRESCRIPTION</h3>
            <p>Doctors can create digital prescription to save patient records online</p>
            <a href="#">More -></a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>02</h2>
            <h3>ORDER PLACING</h3>
            <p>Through the prescriptions, order can be directly placed through our website</p>
            <a href="#">More -></a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>03</h2>
            <h3>MANAGEMENT OF MEDICAL STOCK</h3>
            <p>Digital tracking and management of medical stock, providing real-time updates on expiration dates,etc</p>
            <a href="#"> More -></a>
          </div> 
        </div>
      </div>
    </div>
    <div className='aboutus' id='navtoaboutus'>
      
      <div className='aboutleft'>
        <h1>ABOUT US</h1>
        <p> " Our cutting-edge hospital management system revolutionizes healthcare by empowering doctors to seamlessly generate digital prescriptions, ensuring accuracy and efficiency. With a meticulously maintained digital medicine store, we guarantee real-time updates on medication availability. Additionally, our platform streamlines the process by allowing users to conveniently place digital orders for medications, enhancing overall patient care and administrative efficacy. "</p>
        <p>&#9679;&#9679;&#9679;&#9679;</p>
      </div>
      <div className='aboutright'><img src={logo} alt="" /></div>
    </div>
    </>
  )
}

export default Body