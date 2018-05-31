import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesome from './font_awesome';

export class BiomaterialTableRow extends Component {

  render() {
    const { biomaterial, onClick, removeable, onRemove, index, selected } = this.props;

    let removeableTd;

    if (removeable) {
      removeableTd = <td><FontAwesome style={{cursor: 'pointer'}} onClick={ (e) => onRemove(biomaterial) } icon='times' /></td>;
    }

    const trClass = classNames({
      info: selected.find((bm) => bm.id == biomaterial.id)
    })

    const style = (biomaterial.available == false) ? { opacity: 0.5 } : {};

    return (
      <tr className={trClass} style={style} onClick={(e) => onClick(biomaterial, index, e) }>
        <td>{biomaterial.scientific_name}</td>
        <td>{biomaterial.gender}</td>
        <td>{biomaterial.phenotype}</td>
        <td>{biomaterial.supplier_name}</td>
        <td>{biomaterial.donor_id}</td>
        {removeableTd}
      </tr>
    )
  }
}

BiomaterialTableRow.defaultProps = {
  onClick: () => {},
  removeable: false,
  selected: [],
  biomaterial: {
    id: '',
    scientific_name: '',
    gender: '',
    phenotype: '',
    supplier_name: '',
    donor_id: ''
  }
}

export class BiomaterialTable extends Component {

  render() {
    const { decorators, biomaterials, materials, ...rest } = this.props;
    const tableClass = classNames({
      table: true,
      'table-striped': true
    });
    const instances = Object.values(biomaterials || {});
    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <th>Scientific Name</th>
            <th>Gender</th>
            <th>Phenotype</th>
            <th>Supplier Name</th>
            <th>Donor ID</th>
            {/* If the materials are removeable have a blank table header for the extra column */}
            { rest['removeable'] && <th></th>}
          </tr>
        </thead>
          <tbody>
            {
              instances.map((biomaterial, index) => {
                return <decorators.row key={index} index={index} biomaterial={biomaterial} {...rest} />;
              })
            }
          </tbody>
      </table>
    )
  }
}

BiomaterialTable.defaultProps = {
  decorators: {
    row: BiomaterialTableRow
  }
}
