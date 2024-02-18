import React from 'react'
import './Loginmenu.css'
import logo from '../assets/logo1.png'
import login from '../assets/login.png'
import { Link } from 'react-router-dom'
const Loginmenu = () => {
  return (
    
        <div className='xyz'>

        
            <div className='logimg'>
                <img src={login} alt="" />
            </div>
            <section className='abc'>
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="cover item-b">
                            <h1>Login As<br></br>Doctor</h1>
                            {/* <span className="price">$35</span> */}
                            <div className="card-back">
                                {/* <a href="#">LOGIN</a> */}

                                <Link to="/logindoc" className='logbut'>LOGIN</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="card">
                        <div className="cover item-c">
                            <h1>Login As<br></br>Medical Owner</h1>
                            {/* <span className="price">$155</span> */}
                            <div className="card-back">
                                {/* <a href="#">LOGIN</a> */}
                                <Link to="/loginmed" className='logbut'>LOGIN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
       


  )
}

export default Loginmenu