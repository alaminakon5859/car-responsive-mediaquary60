import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h2>sorry no data</h2>
           <Link to='/'> <button>go back</button></Link>
        </div>
    );
};

export default Notfound;