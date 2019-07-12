import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactSpeedometer from 'react-d3-speedometer';

class TableRow extends Component {

  constructor(props) {
        super(props);
    }
    
  render() {
    return (
      
          <div>
            <p>{this.props.obj.no_positive_tweets}</p>
          
          
            <p>{this.props.obj.no_negative_tweets}</p>
         
            <p>{this.props.obj.male_positive_tweets}</p>
            

           







            </div>
    );
  }
}

export default TableRow;