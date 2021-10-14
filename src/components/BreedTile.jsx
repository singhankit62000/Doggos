import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

let bgGradients = [
    "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
    "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
    "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
    "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
    "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    "linear-gradient(60deg, #96deda 0%, #50c9c3 100%)",
];

const DogBreeds = (props) => {
    return (
        <Link style={{textDecoration: "none"}} to={`/${props.name}`}>
        <div className="card" style={{height: 250, width: 400, textAlign:"center", display:"flex", justifyContent:"center", alignContent:"center", backgroundImage: bgGradients[Math.floor((Math.random())*bgGradients.length)]}}>
            <i class="fas fa-paw"></i>
            <h2 className="title">{props.dogBreed.split("-").join(" ")}</h2>
        </div>
        </Link>
    );
}

export default DogBreeds;