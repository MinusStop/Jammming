import React from "react";
import './Track.css';

export class Track extends React.Component {
  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(){
    this.props.onAdd(this.props.track)
  }

  render() {
    let isRemoval;

    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action" onClick={this.addTrack} >{isRemoval ? '-' : '+'}</button>
      </div>
    );
  };
}