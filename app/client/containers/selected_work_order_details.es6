import React from 'react';
import { connect } from 'react-redux';
import WorkOrderDetails from '../components/work_order_details.es6';
import { getSelectedProduct, getSelectedProductOptions, getSelectedProductOptionValues } from '../selectors';

const mapStateToProps = (state) => {
  return {
    product: getSelectedProduct(state),
    options: getSelectedProductOptions(state),
    values: getSelectedProductOptionValues(state)
  }
};

export default connect(mapStateToProps)(WorkOrderDetails);