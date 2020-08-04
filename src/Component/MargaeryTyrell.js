import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';
export default class MargaeryTyrell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }
  componentDidMount() {
    Axios.get("http://anapioficeandfire.com/api/characters/16")
    .then(Response => {
      let MargaeryTyrell=Response.data.born;
      console.log("Born: " + MargaeryTyrell);
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:MargaeryTyrell})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  }
  render() {
    return (
      <div>
        <h2>Q: Where was Margaery Tyrell born?</h2>
        <h3>Margaery Tyrell was born {this.state.data}.</h3>        
      </div>
    )
  }
}