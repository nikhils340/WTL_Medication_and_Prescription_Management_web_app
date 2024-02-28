import React from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch} from "react-redux";
import { logout } from "../utils/userslice";
import { useEffect } from "react";


function Logout() {
   
    const navigate = useNavigate();
    const dispatch=useDispatch();
 
    useEffect(() => {
      dispatch(logout());
      navigate("/home");
    }, [dispatch, navigate]);
  
    return null;

}

export default Logout;