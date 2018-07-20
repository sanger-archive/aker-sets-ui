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
        <td>{biomaterial.id}</td>
        <td>{biomaterial.supplier_name}</td>
        <td>{biomaterial.amount}</td>
        <td>{biomaterial.volume}</td>
        <td>{biomaterial.tissue_type}</td>
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
    supplier_name: '',
    amount: '',
    volume: '',
    tissue_type: ''
  }
}

export class BiomaterialTable extends Component {

  render() {
    const { decorators, biomaterials, ...rest } = this.props;
    const tableClass = classNames({
      table: true,
      'table-striped': true
    });
    const instances = Object.values(biomaterials || {});
    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Supplier Name</th>
            <th>Amount</th>
            <th>Volume</th>
            <th>Tissue Type</th>
            {/* If the materials are removeable have a blank table header for the extra column */}
            { rest['removeable'] && <th>Remove?</th>}
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
