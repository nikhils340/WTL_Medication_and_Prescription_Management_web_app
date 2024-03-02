import React,{useState, useContext} from "react";
import {LoginDoctorData} from "../data/LoginDoctorData";
import {Link, useNavigate} from "react-router-dom";
// import {UserContext} from "../UserContext";
import './Logindoc.css';
import logo from "../assets/logo1.png"
import { useSelector,useDispatch} from "react-redux";
import { loginAsDoctor } from "../utils/userslice";


function LoginDoctor() {
  // const {state, dispatch} = useContext(UserContext);
  const dispatch=useDispatch();
  const userinfo=useSelector((store)=>store.user);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const navigate = useNavigate();
  const errors = {
      uname: "Invalid Username",
      pass: "Invalid Password"
    };
    const handleSubmit = (event) => {
    
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
     
      const userData = LoginDoctorData.find((user) => user.username === uname.value);
  
    
      if (userData) {
        if (userData.password !== pass.value) {
      
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
         
          dispatch(loginAsDoctor(uname.value));
          setIsSubmitted(true);
          navigate("/home");
        }
      } else {
    
        setErrorMessages({name: "uname", message: errors.uname});
      }
    };
  
 
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    

    const renderForm=(
      <div className="logindocpage">
        <div className="wrapper">
          <span className="bg-animate"></span>
          <div className="form-box login">
            <h2>LOGIN AS DOCTOR</h2>
            <form action="#" onSubmit={handleSubmit}>
              <div className="input-box">
                <input type="text" placeholder="Username" name="uname" required/>
                {renderErrorMessage("uname")}
                <label>Username</label>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" name="pass" required/>
                {renderErrorMessage("pass")}
                <label>Password</label>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
              </div>
              <button type="submit" className="btn1">Login</button>
            </form>
          </div>
          <div className="info-text login">
            <img src={logo} alt="" />
          </div>
        </div>
        </div>
    )

    
  
    return (

      <div className="app">
        {renderForm}
      </div>
        
      
    );
}

export default LoginDoctor;