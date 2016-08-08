import React from 'react';
import { connect } from 'react-redux';
import { readEndpoint } from 'redux-json-api';
import { selectProduct } from '../actions';
import ProductList from '../components/product_list.es6';

const mapStateToProps = ({ api, selected }) => {
  return {
    products: api.products.data.sort((a, b) => a.id - b.id),
    selected_product: selected.product_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProductClick: (product) => {
      dispatch(selectProduct(product.id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
