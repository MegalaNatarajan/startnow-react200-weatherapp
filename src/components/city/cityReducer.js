import { types } from './cityAction';

const defaultState = {
  description: '',
  lineItems: [],
  date: [],
};

export default function CityReducer(state = defaultState, action) {
  const { type, payload } = action;
 
  switch (type) {

    // Here in the case of the update description action 
    case `${types.CLICK_GO}_FULFILLED`: {
     // case types.CLICK_GO : {  
      // we'll return an object
      const { description } = action.payload;
      const { name, coord, main, wind, weather } = action.payload;
      
        const date =new Date();
        const day= date.getDate();
        const month= date.getMonth()+1;
        const year= date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
    
      return {
        description: '',
        action: '',
        date: [
              ...state.date,
              {day,month,year,hour,minute,second},
              
            ],
        lineItems: [
            // here we have all the previous line items
            ...state.lineItems,
            // plus a new object
           
            { name, coord, main, wind, weather },
            
        ],
        
        
           
      };
      
    }
    case `${types.SEARCH_CITY}_FULFILLED`: {
        // we'll return an object
        const { description } = action.payload;
        const { name, coord, main, wind, weather } = action.payload;
        const date =new Date();
        const day= date.getDate();
        const month= date.getMonth()+1;
        const year= date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        
        return {
            description: '',
            action: '',
            date: [
              ...state.date,
              {day,month,year,hour,minute,second},
              
            ],
            lineItems: [
                // here we have all the previous line items
                ...state.lineItems,
                // plus a new object
                { name, coord, main, wind, weather},
               
              ],
               
              
        };
        
      }
      case types.INPUT_CITY: {
        // we'll return an object
        return {
          // with all the previous state
          ...state,
          // but overwriting the description
          description: payload.description
        };
        
      }
    default: {
        return state;
      }
    }
}

