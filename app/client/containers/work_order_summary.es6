import React from 'react';
import { connect } from 'react-redux';
import WorkOrderSummary from '../components/work_order_summary.es6';
import { getSelectedProduct, getSelectedSet } from '../selectors';

const mapStateToProps = (state) => {
  return {
    product: getSelectedProduct(state),
    set: getSelectedSet(state)
  }
};

export default connect(mapStateToProps)(WorkOrderSummary);