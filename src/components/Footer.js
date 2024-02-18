import React from 'react'
import "./Footer.css"
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <p class="about">
                    <h3> About the Project</h3> 
                    When the patient is admitted to the hospital,the doctor enters the prescription into the database onto the website. This data is checked in accordance with the current stock of the in-house medical store. In case the prescribed drug is currently unavailable in the in-house medical store, the website directs the user to the nearest medical store.Now if the medicine is available in the in-house store then we use Blockchain technology to check the authenticity of the drug.It tells us if the drug is sourced from a legitimate manufacturer or not. 
                    Thus making the supply chain very transparent and reliable.
                </p>
                <div class="icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p>PICT,Pune</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p> (+00) 0000 000 000</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="#"> office@company.com</a></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <h2>THE MED PORTAL</h2><img src={logo}></img>
                <p class="menu">
                    <a href="#"> Home</a> |
                    <a href="#"> About</a> |
                    <a href="#"> Services</a> |
                    <a href="#"> Portfolio</a> |
                    <a href="#"> News</a> |
                    <a href="#"> Contact</a>
                </p>
                <p class="name"> Company Name &copy; 2016</p>
            </div>
        </footer>
  )
}

export default Footer