import React, {useState} from "react";
import BreedTile from "./BreedTile"
import "./styles.css";

const DogList = (props) => {

    let breedNames = [];

    for(var a in props.breeds) {
        if(props.breeds[a].length !== 0)
        {
            for(var b of props.breeds[a])
            {
                a = a[0].toUpperCase() + a.substring(1);
                b = b[0].toUpperCase() + b.substring(1);
                breedNames.push(a + " " + b);
            }
        }
        else if(props.breeds[a].length === 0)
        {
            a = a[0].toUpperCase() + a.substring(1);
            breedNames.push(a);
        }
    }

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="container">
            <input 
                type="text"
                placeholder="Type here ..."
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
                className="search"
                style={{width: "100vw", margin: "1rem 35rem 1rem 35rem", padding: "1rem"}}
            />            
            {
                breedNames.filter((val) => {
                if(searchTerm === "") {
                    return val
                } else if(val.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                } else                
                return false
                }).map((breed) => {
                    return <BreedTile dogBreed={breed} name={breed.split(" ").join("-").toLowerCase()}/>
                })

            }            
        </div>
    );
}

export default DogList;  