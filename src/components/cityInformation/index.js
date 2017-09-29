import { connect } from 'react-redux';
import CityInformation from './cityInformation';

function mapStoreToProps(store) {
  return {
    cityItems: store.city.lineItems,
    
  };
}

export default connect(mapStoreToProps)(CityInformation);