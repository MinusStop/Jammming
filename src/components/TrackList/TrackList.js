import React from "react";
import './TrackList.css';
import {Track} from '../Track/Track.js'

export class TrackList extends React.Component {
  render() {
    return(
      <div className="TrackList">
        {
          this.props.tracks.map(t => {return <Track key={t.id} track={t} onAdd={this.props.onAdd} />})
        }
      </div>
    )
  }
}