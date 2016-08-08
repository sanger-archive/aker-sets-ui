import React from 'react';
import { connect } from 'react-redux';
import { BiomaterialTable } from '../components/biomaterial_table.es6';
import { getSelectedResourceBiomaterials } from '../selectors';

let SelectedEntity = ({ entity, biomaterials }) => {
  if (entity.type == 'collections') {
    return <BiomaterialTable biomaterials={biomaterials} />
  }

  return (<div></div>);
};

const mapStateToProps = (state) => {
  let biomaterials = [];

  if (state.selected.entity.type == 'collections') {
    biomaterials = getSelectedResourceBiomaterials(state)
  }

  return { entity: state.selected.entity, biomaterials };
}

export default connect(
  mapStateToProps
)(SelectedEntity);
