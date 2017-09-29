import React from 'react';
export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { cityItems, cityItemsDate } = this.props;
        return (

         <div className='card border-info mb-3'>
                <div className='card-header text-white bg-info'>Search History</div>
        <div className='card-body' style={{width:'100%'}}>
        <div style={{width:'50%',float:'left'}}>
        <table className="table table-striped">
        <tbody>
        
         {
            cityItems.map(lineItem => (
                <tr>
                <th scope="row">
                { lineItem.name }
                </th>
                </tr>
            ))
          }
          </tbody>
          </table>
        </div>
        <div style={{width:'50%',float:'left'}}>
        <table className="table table-striped">
        <tbody>
          {
                  cityItemsDate.map(item => (
                    <tr>
                    <td scope="row">
                          { item.month }/
                          { item.day }/
                          {item.year} {item.hour}:{item.minute}:{item.second}
                        </td> 
                        </tr> 
                  ))
              }
          
          
         
          
        </tbody>
        </table>
        </div>
        </div>
        </div>
        );
    }
}    