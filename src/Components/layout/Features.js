'use client'
import Aos from "aos";
import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { CiReceipt } from "react-icons/ci";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { IoMap } from "react-icons/io5";
import Features from './Features';
import FeatureCard from "../UI/FeatureCard";
const Feature = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    }, [])
    const features=[
        {
            icon:"FaLocationArrow",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"BsCurrencyDollar",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"FaUserFriends",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"CiReceipt",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"CgArrowsExchangeAltV",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"IoMap",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"FaLocationArrow",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"FaLocationArrow",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        {
            icon:"FaLocationArrow",
            title:"Add expenses on the go",
            description:"Adding new entries in TravelSpend is quick and easy. It works offline and foreign currencies are automatically converted."
        },
        
    ]

    
    return (
      
        <section className="feature-section" >
            <div className="container mx-auto p-4">
                <div className="text-center text-5xl font-bold mb-16 text-blue-500">Features</div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="zoom-in">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={`feature-${index}`}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
            </section>
      
    );
};

export default Feature;