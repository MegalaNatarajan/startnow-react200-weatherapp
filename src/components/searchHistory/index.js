import { connect } from 'react-redux';
import SearchHistory from './searchHistory';

function mapStoreToProps(store) {
  return {
    cityItems: store.city.lineItems,
    cityItemsDate: store.city.date,
  };
}

export default connect(mapStoreToProps)(SearchHistory);