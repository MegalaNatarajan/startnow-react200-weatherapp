import axios from 'axios';
export const types = {
    CLICK_GO: 'CLICK_GO',
    SEARCH_CITY: 'SEARCH_CITY',
    INPUT_CITY: 'INPUT_CITY'
  };
  
  // Action Creators
  export function InputCity(description) {
    return {
      type: types.INPUT_CITY,
      payload: { description }
    };
  }
  export function ClickGo (description) {
    const req = axios.get('http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=049de10c3175dafe0ab23c0ccc3effca&q='+description)
    .then(response =>  {
        
        return response.data;
       })
       
    return {
      type: types.CLICK_GO,
       
      payload: req
        
    };
}
export function searchCity (cityName) {
    const req = axios.get('http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=049de10c3175dafe0ab23c0ccc3effca&q='+cityName)
      .then(response =>  {
          
          return response.data;
         })
    return {
      type: types.SEARCH_CITY,
      payload: req
         
    }
}

