import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';
export default class HouseTargaryen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }
  componentDidMount() {
    Axios.get("http://www.anapioficeandfire.com/api/houses/378")
    .then(Response => {
      const HouseTargaryen=Response.data.region;
      console.log("Region: " + HouseTargaryen);
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:HouseTargaryen})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  }
  render() {
    return (
      <div>
        <h1>Q: What region is House Targaryen in?</h1>
        <h3>A:The region that House Targaryen is{this.state.data}.</h3>        
      </div>
    )
  }
}