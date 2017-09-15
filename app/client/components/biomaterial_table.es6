import React from 'react';
import classNames from 'classnames';
import FontAwesome from './font_awesome.es6';

export const BiomaterialTableRow = React.createClass({
  getDefaultProps() {
    return {
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
  },

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
        <td>{biomaterial.scientific_name}</td>
        <td>{biomaterial.gender}</td>
        <td>{biomaterial.phenotype}</td>
        <td>{biomaterial.supplier_name}</td>
        <td>{biomaterial.donor_id}</td>
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
    const { decorators, biomaterials, materials, ...rest } = this.props;

    const tableClass = classNames({
      table: true,
      'table-striped': true
    });

    return (
      <table className={tableClass}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Scientific Name</th>
            <th>Gender</th>
            <th>Phenotype</th>
            <th>Supplier Name</th>
            <th>Donor ID</th>
          </tr>
        </thead>
          <tbody>
            { biomaterials.map((biomaterial, index) => {
              if (biomaterial.id in materials) {
                biomaterial = materials[biomaterial.id]
              }

              return <decorators.row key={index} index={index} biomaterial={biomaterial} {...rest} />;
            })}
          </tbody>
      </table>
    )
  }
});