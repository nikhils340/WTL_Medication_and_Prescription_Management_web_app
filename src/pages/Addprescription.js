import React,{useState} from "react";
import Prescription from "../components/Prescription";



const Addprescription = () => {
    const [presc,setPresc]=useState([])
    function addMedicine(prescription) {
        setPresc(prevValue => {
            return [...prevValue, prescription]
        })
    }
    return (
        <div>
        <Prescription />
        </div>
    )
}

export default Addprescription

