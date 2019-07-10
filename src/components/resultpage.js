import React, { Component } from 'react';
import axios from 'axios';
import ReactSpeedometer from "react-d3-speedometer"
import './resultpage.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import TableRow from './TableRow';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const myDataSource = {
  "chart": {
      "caption": "Total Positive Tweets",
      "subCaption": "Comparison by Male and Female",
      "xAxisName": "",
      "yAxisName": "Total Tweets",
     
      "theme": "gammel"
  },
  "data": [
      {
          "label": "Male",
          "value": "290"
      },
      {
          "label": "Female",
          "value": "60"
      }
  ]
};

const myDataSource2 = {
  "chart": {
      "caption": "Total Negative Tweets",
      "subCaption": "Comparison by Male and Female",
      "xAxisName": "",
      "yAxisName": "Total Tweets",
     
      "theme": "gammel"
  },
  "data": [
      {
          "label": "Male",
          "value": "120"
      },
      {
          "label": "Female",
          "value": "34"
      }
  ]
};

const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

const chartConfigs2 = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource2,
};
class ResultPage extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/twitterdata')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
     tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
     }

    render() {

      return (<div>
        <div> state = {this.state.business.no_positive_tweets}</div>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/resultpage'} className="nav-link">Sentiment Analysis</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/statisticspage'} className="nav-link">Statistics</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/locationpage'} className="nav-link">Location Analysis</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div> 
<div class="container">
            <div class="row">
                <div class="col">

                    <ReactSpeedometer
                    value={this.business.no_positive_tweets}
                    needleColor="black"
                    needleTransitionDuration={500}
                    needleTransition="easeLinear"
                    currentValueText="Total Positive Tweets: ${value}"
                    height={300}
                    width={500}
                    />
                
                </div>
                <div class="col">      
                
                    <ReactSpeedometer
                    value={1230}
                    needleColor="black"
                    needleTransitionDuration={500}
                    needleTransition="easeLinear"
                    currentValueText="Total Negative Tweets: ${value}"
                    height={300}
                    width={500}
                    maxValue={2000}
                    />  
                
                </div>
            </div>
</div>

            <div class="row">
              <div class="col">
                    <ReactFC {...chartConfigs} />
              </div>
              <div class="col">
                    <ReactFC {...chartConfigs2} />
              </div>
            </div>
          </div>

        );
    }
  
  }
  export default ResultPage;