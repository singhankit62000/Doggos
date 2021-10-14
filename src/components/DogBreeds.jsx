import React, {Component} from "react";
import DogList from "./DogList";
import "./styles.css"

class DogBreeds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
        }
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => res.json())
        .then((data) => {
            this.setState({ breeds: data.message })
            console.log(data.message);
        });
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1 className="heading">
                    Welcome to the Doggo World!
                </h1>
                <p className="subheading">
                    Look for your fav pups and cuties here!
                </p>
                <DogList breeds={this.state.breeds}/>
            </div>
        )
    }
}

export default DogBreeds;