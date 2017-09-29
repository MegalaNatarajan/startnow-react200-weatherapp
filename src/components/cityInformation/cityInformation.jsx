import React from 'react';
export default class CityInformation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { cityItems } = this.props;
        return (

         <div className='card border-info mb-3'>
                <div className='card-header text-white bg-info'>
                    City Information</div>
        <div className='card-body'>
        
         {
            cityItems.map(lineItem => (
              <div>
                  <div className='row'>
                  
                      { lineItem.weather.map(item => (
                          <div className='col-sm-4'>
                              <img style={{align:'right'} }src={`http://openweathermap.org/img/w/${item.icon}.png`}/>
                          </div>
                        )) }
                        
                        <div className='col-sm-6'>    
                          <h4>{ lineItem.name }</h4>
                        </div> 
                    </div>    
                    <div classsName='row'> 
                      <div className='col-sm-10' style={{marginLeft:'10px'}}>    
                         <h6 style={{textAlign: 'center'}}> Lat/Long: { lineItem.coord.lat },{ lineItem.coord.lon }</h6>
                      </div>
                    </div>
                    <div className="row">
                       <div className="col-sm-4"> 
                        Temperature (F)  { lineItem.main.temp }
                       </div> 
                       <div className="col-sm-3"> 
                        Pressure { lineItem.main.pressure }
                       </div> 
                       <div className="col-sm-3"> 
                            
                        Humidity 
                         { lineItem.main.humidity }
                        
                       </div>
                    </div>
                    <div className="row">
                     <div className="col-sm-4"> 
                        Lowest Temp (F) { lineItem.main.temp_min }
                      </div>  
                      <div className="col-sm-4">  
                        Highest Temp (F) { lineItem.main.temp_max }
                      </div>  
                      <div className="col-sm-3">
                        Wind Speed { lineItem.wind.speed }
                       </div> 
                    </div>
               </div> 
            ))
          }
             
         
        </div>
        </div>
        );
    }
}    