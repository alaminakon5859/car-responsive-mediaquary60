import React from 'react';
import './Expart.css';

const Expart = ({expart}) => {
    const {name, img, expartise}=expart;
    return (
        <div className="col-lg-4">
            <h2>name: {name}</h2>
            <h4>expartise: {expartise}</h4>
            <img className="img" src={img} alt="" />
        </div>
    );
};

export default Expart;