import React, { Component } from 'react';
import classNames from 'classnames';
import FontAwesome from './font_awesome';
import { Link } from 'react-router-dom';

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

function TableSortHeader(props) {
  const { column, children, sortable } = props;
  if (!sortable) {
    return (<th>{children}</th>);
  }
  const params = new URLSearchParams(window.location.search);
  let order = '1';
  let orderIcon = '';
  if (params.get('sortBy')==column) {
    if (params.get('order')==1) {
      orderIcon = ' ' + String.fromCharCode(9650);
      order = '-1';
    } else {
      orderIcon = ' ' + String.fromCharCode(9660);
    }
  }
  let search = 'sortBy=' + column + '&order=' + order;
  const page = params.get('page');
  if (page) {
    search += '&page=' + page;
  }
  const target = ({
      pathname: window.location.pathname,
      search: search
  });
  return (<th><Link to={target}>{children}{orderIcon}</Link></th>);
}

export class MaterialTable extends Component {

  render() {
    const { decorators, materials, sortable, ...rest } = this.props;
    const tableClass = classNames({
      table: true,
      'table-striped': true
    });
    const instances = Object.values(materials || {});
    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <TableSortHeader column='_id' sortable={sortable}>ID</TableSortHeader>
            <TableSortHeader column='supplier_name' sortable={sortable}>Supplier Name</TableSortHeader>
            <TableSortHeader column='concentration' sortable={sortable}>Concentration</TableSortHeader>
            <TableSortHeader column='amount' sortable={sortable}>Amount</TableSortHeader>
            <TableSortHeader column='volume' sortable={sortable}>Volume</TableSortHeader>
            <TableSortHeader column='tissue_type' sortable={sortable}>Tissue Type</TableSortHeader>
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
