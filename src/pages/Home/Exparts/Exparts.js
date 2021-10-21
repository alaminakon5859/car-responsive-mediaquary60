import React from 'react';
import Expart from '../Expart/Expart';







const expart = [
    { img: 'https://i.ibb.co/wBQ9KYK/A-man-mechanic-and-woman-customer-look-at-the-car-hood-and-discuss-repairs.jpg', name: "alamin", expartise: "car" },
    { img: 'https://i.ibb.co/bNnbGkD/Young-man-washing-his-car-at-carwash.jpg', name: "rafiq", expartise: "car" },
    { img: 'https://i.ibb.co/4t9cgSw/smiling-mechanic-with-arms-crossed-spanner.jpg', name: "shofik", expartise: "car" },
    { img: 'https://i.ibb.co/Ntfw7xN/Man-polishing-car-inside-at-car-service.jpg', name: "jubbar", expartise: "car" },
    { img: 'https://i.ibb.co/Jv3PYWm/mechanic-holding-digital-tablet.jpg', name: "borkot", expartise: "car" },
    { img: 'https://i.ibb.co/hmwBgGF/Repair-man-making-car-service.jpg', name: "mamun", expartise: "car" },
    { img: 'https://i.ibb.co/hmwBgGF/Repair-man-making-car-service.jpg', name: "rasel", expartise: "car" }
]



const Exparts = () => {
    return (
        <div id="exparts" className="container">
            <h2 className="mt-5">our expart</h2>
            <div className="row">
                {
                    expart.map(expart => <Expart expart={expart}></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;