import React from 'react';
import classNames from 'classnames';
import FontAwesome from './font_awesome.es6';

export const BiomaterialTableRow = React.createClass({
  getDefaultProps() {
    return {
      onClick: () => {},
      removeable: false,
      selected: []
    }
  },

  render() {
    const { biomaterial, onClick, removeable, onRemove, index, selected } = this.props;

    let removeableTd;

    if (removeable) {
      removeableTd = <td><FontAwesome style={{cursor: 'pointer'}} onClick={ (e) => onRemove(biomaterial) } icon='times' /></td>;
    }

    const trClass = classNames({
      info: (selected.find((bm) => bm.id == biomaterial.id))
    })

    return (
      <tr className={trClass} onClick={(e) => onClick(biomaterial, index, e) }>
        <td>{biomaterial.attributes.supplier}</td>
        <td>{biomaterial.attributes.supplier_identifier}</td>
        <td>{biomaterial.attributes.sanger_tube_barcode}</td>
        <td>{biomaterial.attributes.uuid}</td>
        <td>{biomaterial.attributes.biomaterial_type}</td>
        <td>{biomaterial.attributes.metadata}</td>
        {removeableTd}
      </tr>
    )
  }
});

export const BiomaterialTable = React.createClass({

  getDefaultProps() {
    return {
      decorators: {
        row: BiomaterialTableRow
      }
    }
  },

  render() {
    const { decorators, biomaterials, ...rest } = this.props;

    const tableClass = classNames({
      table: true,
      'table-striped': true
    });

    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Supplier Identifier</th>
            <th>Sanger tube barcode</th>
            <th>Sanger assigned UUID</th>
            <th>Biomaterial type</th>
            <th>Metadata</th>
          </tr>
        </thead>
          <tbody>
            { biomaterials.map((biomaterial, index) => {
              return <decorators.row key={index} index={index} biomaterial={biomaterial} {...rest} />;
            })}
          </tbody>
      </table>
    )
  }
});