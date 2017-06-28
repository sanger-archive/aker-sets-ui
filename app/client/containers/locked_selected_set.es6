import React from 'react';
import { connect } from 'react-redux';
import { BiomaterialTable } from '../components/biomaterial_table.es6';
import { getSelectedTopMaterials } from '../selectors';

const mapStateToProps = (state) => {
  return {
    biomaterials: getSelectedTopMaterials(state),
    materials: state.materials,
    removeable: false
  };
}

export default connect(
  mapStateToProps
)(BiomaterialTable);
