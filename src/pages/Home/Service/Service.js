import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';



const Service = ({service}) => {
    const {name,id, img, time}=service;
    return (
        
        
        <div className="container">
           
            <div className="service">
            
            <img className="img" src={img} alt="" />
            <h4>name: {name}</h4>
            <h4>time: {time}</h4>
          <Link to={`/booking/${id}`}>  <button>book {name.toLowerCase() } </button></Link>
            
            </div>
        </div>

    );
};

export default Service;