import React from 'react';
import {
  ClickGo,
  searchCity,
  InputCity
  } from './cityAction';
import axios from 'axios';
export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickGo = this.handleClickGo.bind(this);
        this.searchLondon = this.searchLondon.bind(this);
        this.searchSanDiego = this.searchSanDiego.bind(this);
        this.searchNewYork = this.searchNewYork.bind(this);
        this.searchWashingtonDC = this.searchWashingtonDC.bind(this);
        this.searchTokyo = this.searchTokyo.bind(this);
        this.handleCityInput= this.handleCityInput.bind(this);
        
    }
    handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(InputCity(value));
  }
    handleClickGo(event) {
      // dispatch was provided by connect()
      const { description, dispatch } = this.props;
      const date = new Date();
      dispatch(ClickGo(description));
    }
    searchLondon(event){
      
      const cityName = document.getElementById('London').text;
        const { description, dispatch } = this.props;
      
      dispatch(searchCity(cityName));
    }
    searchNewYork(event){
      const cityName = document.getElementById('NewYork').text;
        const { description, dispatch } = this.props;
      
      dispatch(searchCity(cityName));
    }
    searchSanDiego(event){
      const cityName = document.getElementById('SanDiego').text;
        const { description, dispatch } = this.props;
      
      dispatch(searchCity(cityName));
    }
    searchWashingtonDC(event){
      const cityName = document.getElementById('WashingtonDC').text;
        const { description, dispatch } = this.props;
      
      dispatch(searchCity(cityName));
    }
    searchTokyo(event){
      const cityName = document.getElementById('Tokyo').text;
        const { description, dispatch } = this.props;
      
      dispatch(searchCity(cityName));
    }
    render() {
        const { description, lineItems } = this.props;
        return (
          <div>
              <a className="btn btn-info" href="#" id="SanDiego" onClick={this.searchSanDiego}>San Diego</a>
              <a className="btn btn-info" href="#" id="NewYork" onClick={this.searchNewYork}>New York</a>
              <a className="btn btn-info" href="#" id="WashingtonDC" onClick={this.searchWashingtonDC}>Washington D.C</a>
              <a className="btn btn-info" href="#" id="London" onClick={this.searchLondon}>London</a>
              <a className="btn btn-info" href="#" id="Tokyo" onClick={this.searchTokyo}>Tokyo</a>
              <div className="row">
                <div className="col-sm-8">
              <input type="text" className="form-control"  value={ description }
                onChange={ this.handleCityInput }></input>
                </div>
                <div className="col-sm-4">
                <button className="btn btn-info" onClick={this.handleClickGo}>Go!</button>
                </div>
                </div>
        
          </div>
        );
    }
    
}
