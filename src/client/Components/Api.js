import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Api = () =>{

const [arrivingData, setArrivingData] = useState([])

const getApiData= async()=>{
    const data = await axios.get('http://localhost:5000/bank/')
    setArrivingData(data.data)
    console.log(data.data);
}
useEffect(()=>{ getApiData()},[]);



    return (
        <div>
            
               
        </div>
    )
}

export default Api;
