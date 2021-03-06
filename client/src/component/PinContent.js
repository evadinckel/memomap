import React, { Component } from 'react';
import '../styles/pinContent.css';

export default class PinContent extends Component {

  dateConverter = (date) => {
    var dateone = date.split("T")[0]
    return dateone.split("-").reverse().join("-")
  }

  render() {
    return (
      <div id="try">
        <img className="imaging" src={this.props.pin.imageurl} alt="Image Uploaded" />
        <h1 id="place"> Place: {this.props.pin.place}</h1>
        <h5 id="date">Date: {this.dateConverter(this.props.pin.date)}</h5>
        <h5 id="activity">{this.props.pin.activity}</h5>
        <h5 id="ratingg">Rating: {this.props.pin.rating}</h5>
        <h2 id="title">Title: {this.props.pin.memory}</h2>
      </div>
    )
  }
}
