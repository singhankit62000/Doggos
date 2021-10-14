import React, {Component} from "react";

class Random extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
        }
    }

    componentDidMount() {
        fetch(`https://dog.ceo/api/breeds/image/random/10`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ urls: data.message })
            console.log(data.message);
        });
    }

    render() {
        let urlArray = this.state.urls.map((url) => {
                return <img className="item" src={url} alt={url}></img>
            })
        return (
            <div style={{textAlign: "center"}}> 
            <h1 className="heading imagelist-head"><span>Random Doggos</span></h1>
            <div className="masonry-layout">
                {urlArray}
            </div>
            </div>
        )
    }

}

export default Random