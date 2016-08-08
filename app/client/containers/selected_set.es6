import React from 'react';
import { connect } from 'react-redux';
import { BiomaterialTable } from '../components/biomaterial_table.es6';
import { getSelectedSetBiomaterials } from '../selectors';

const mapStateToProps = (state) => {
  return { biomaterials: getSelectedSetBiomaterials(state) };
}

export default connect(
  mapStateToProps,
)(BiomaterialTable);
