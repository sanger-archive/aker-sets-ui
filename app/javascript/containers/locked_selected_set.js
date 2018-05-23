import React from 'react';
import { connect } from 'react-redux';
import { BiomaterialTable } from '../components/biomaterial_table';
import { getSelectedTopMaterials } from '../selectors/index';

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
