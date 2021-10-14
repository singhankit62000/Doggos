import React, {Component } from "react";
import "./styles.css";
import ImageList from "./ImageList";

class BreedImages extends Component {
  render() {
      const ext = this.props.match.url.split("-").join("/").toLowerCase();
      console.log(ext);
      
      return (
          <div style={{textAlign: 'center'}}>
              <h1 className="heading imagelist-head"><span>{ext.split("/").join(" ")}</span></h1>
              <ImageList ext={ext} />
          </div>
      )
  }
}

export default BreedImages;