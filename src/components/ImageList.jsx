import React, {Component} from "react";

class ImageList extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
        }
    }

    componentDidMount() {
        fetch(`https://dog.ceo/api/breed${this.props.ext}/images/random/10`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({ urls: data.message })
            console.log(data.message);
        });
    }

    render() {
        let urlArray = this.state.urls.map((url) => {
                return <img className="item" src={url} alt={this.props.ext.split("/").join(" ")}></img>
            })
        return (
            <div className="container"> 
            <div className="masonry-layout">
                {urlArray}
            </div>
            </div>
        )
    }

}

export default ImageList