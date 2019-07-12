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
      this.state = {twitterdata: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/twitterdata')
        .then(response => {
          this.setState({ twitterdata : response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
     tabRow(){
      return this.state.twitterdata.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
     }

    render() {

      return (<div>
       
        {/* <div>
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
        </div>  */}
        { this.tabRow() }
        </div>
        );
      }

  }
  export default ResultPage;