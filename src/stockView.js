
import React from "react";
import { Component } from "react";
import "./stockView.css";

class StockView extends Component {
    render() {
      return (
        <div className="container">
            <h2>{this.props.name}</h2>
            <h4>$ {this.props.price}</h4>
        </div>
      );
    }
  }
  
  export default StockView;