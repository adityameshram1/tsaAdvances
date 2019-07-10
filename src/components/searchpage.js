import React, { Component } from 'react';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/searchpage.css'
import '../assets/images/t3.png';
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      SearchTerm: '',
      redirectToResultPage: false
    }
  }
  onChangeSearchTerm(e) {
    this.setState({
      SearchTerm: e.target.value
    });
  }
  
  

  onSubmit(e) {
    e.preventDefault();
    if(this.state.SearchTerm){
    const obj = {
      SearchTerms: this.state.SearchTerm,
     
    };
    axios.post('http://localhost:4000/searchterms/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      SearchTerm: '',
      redirectToIndex: true
    })
  }
}
  render() {
    const redirectToIndex = this.state.redirectToIndex;
    if (redirectToIndex === true) {
        return <Redirect to="resultpage" />
    }
    return (
      <div>
     
      <div className="formAlign">
        <div className="alert alert-primary headerCss" role="alert">
          <img src={require('../assets/images/t3.png')} className="rounded-circle float-left shadow-lg p-1 mb-7 bg-white rounded" width = "100px" height="100px" alt="Twitter" contain/>
          <img src={require('../assets/images/twave.jpg')} className="rounded-circle float-right shadow-lg p-1 mb-7 bg-white rounded" width = "100px" height="100px" alt="TechWave" contain/>
            <h1 >SENTIMENT ANALYSIS</h1>
        </div>
      </div>
      <form>                      
              <div class="input11 input-group mb-3">
                <input type="text" 
                        className="form-control input-lg"
                        placeholder="Enter the username or hashtag" 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon1"
                        value={this.state.SearchTerm}
                        onChange={this.onChangeSearchTerm.bind(this)}/>
                        <div class="input-group-append">
                        {this.state.SearchTerm ? 
                            (<button 
                            type="Button" 
                            className="btn btn-primary" 
                            onClick={this.onSubmit} 
                            >
                                            Search
                            </button>):(false)}
                        </div>
              </div>
      </form>

    </div>
    )
  }
}