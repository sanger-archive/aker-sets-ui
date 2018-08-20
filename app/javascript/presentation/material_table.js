import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesome from './font_awesome';

export class MaterialTableRow extends Component {

  render() {
    const { material, onClick, removeable, onRemove, index, selected } = this.props;
    let removeableTd;

    if (removeable) {
      removeableTd = <td><FontAwesome style={{cursor: 'pointer'}} onClick={ (e) => onRemove(material) } icon='times' /></td>;
    }

    const trClass = classNames({
      info: selected.find((m) => m._id == material._id)
    })

    const style = (material.available == false) ? { opacity: 0.5 } : {};

    return (
      <tr className={trClass} style={style} onClick={(e) => onClick(material, index, e) }>
        <td>{material._id}</td>
        <td>{material.supplier_name}</td>
        <td>{material.concentration}</td>
        <td>{material.amount}</td>
        <td>{material.volume}</td>
        <td>{material.tissue_type}</td>
        {removeableTd}
      </tr>
    )
  }
}

MaterialTableRow.defaultProps = {
  onClick: () => {},
  removeable: false,
  selected: [],
  material: {
    _id: '',
    supplier_name: '',
    amount: '',
    volume: '',
    tissue_type: ''
  }
}

export class MaterialTable extends Component {

  render() {
    const { decorators, materials, ...rest } = this.props;
    const tableClass = classNames({
      table: true,
      'table-striped': true
    });
    const instances = Object.values(materials || {});
    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier Name</th>
            <th>Concentration</th>
            <th>Amount</th>
            <th>Volume</th>
            <th>Tissue Type</th>
            {/* If the materials are removeable have a blank table header for the extra column */}
            { rest['removeable'] && <th>Remove?</th>}
          </tr>
        </thead>
          <tbody>
            {
              instances.map((material, index) => {
                return <decorators.row key={index} index={index} material={material} {...rest} />;
              })
            }
          </tbody>
      </table>
    )
  }
}

MaterialTable.defaultProps = {
  decorators: {
    row: MaterialTableRow
  }
}
