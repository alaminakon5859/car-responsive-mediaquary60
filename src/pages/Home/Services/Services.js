import { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (


        <div id="services">
            <h2 className="text-dark mt-5">services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;