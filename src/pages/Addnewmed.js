import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import "./Addnewmed.css"




const Addnewmed = () => {
  const navigate=useNavigate();
    const [med,setMed]=useState({
        name:"",
        quantity:0,
        exp_date:"",
        price:0,
        manufacturer:""
    })
    
    
    

        function handleChange(event) {
        const { name, value } = event.target;
        setMed(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        console.log(med)
        // axios.post('http://localhost:5000/med/',med).then((res)=>{
        // console.log(res.data);
        // })
        console.log(med)
        event.preventDefault()
    }


    return(
   <div className='addnewmedform'>
        <Form className="lovw">
      <Form.Group className="mb-3">
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" className="tish"  name="name"
                value={med.name}
                onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Enter quantity" className="fish" name="quantity"
        value={med.quantity} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" className="lish" name="price"
        value={med.price} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expiration date</Form.Label>
        <Form.Control type="date" placeholder="Enter date of expiry" className="pish" name="exp_date"
        value={med.exp_date} onChange={handleChange} />
      </Form.Group>
   
      
        <Form.Group className="mb-3">
            <Form.Label>Medicine manufacturer</Form.Label>
            <Form.Control type="text" placeholder="Enter name" className="tish"  name="manufacturer"
                    value={med.manufacturer}
                    onChange={handleChange}/>
        </Form.Group>

         
    
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    )
}
export default Addnewmed