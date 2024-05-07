import React from 'react'

import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

function PopularColleges() {
    
const PopularColleges = () => {
    const colleges = [
      {
        id: 1,
        title: "Microsoft",
        location: "Street 10 Karachi, Pakistan",
        openPositions: 10,
        icon: <FaMicrosoft />,
      },
      {
        id: 2,
        title: "Tesla",
        location: "Street 10 Karachi, Pakistan",
        openPositions: 5,
        icon: <SiTesla />,
      },
      {
        id: 3,
        title: "Apple",
        location: "Street 10 Karachi, Pakistan",
        openPositions: 20,
        icon: <FaApple />,
      },
    ];
    return (
        <div className="colleges">
          <div className="container">
            <h3>TOP COMPANIES</h3>
            <div className="banner">
              {colleges.map((element) => {
                return (
                  <div className="card" key={element.id}>
                    <div className="content">
                      <div className="icon">{element.icon}</div>
                      <div className="text">
                        <p>{element.title}</p>
                        <p>{element.location}</p>
                      </div>
                    </div>
                    <button>Open Positions {element.openPositions}</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    };
   
}
export default PopularColleges;


 

