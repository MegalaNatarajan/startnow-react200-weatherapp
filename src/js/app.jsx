import React from 'react';
import City from '../components/city/index';
import CityInformation from '../components/cityInformation/index';
import SearchHistory from '../components/searchHistory/index';
import {connect} from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center' style={{fontSize: '2rem',fontWeight: 'bold'}}>Origin Weather Application</h1>
          <p style={{textAlign:'center'}}>Always know if you need a umberlla!</p>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <City />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformation />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
        
      </div>
    );
  }
}


     