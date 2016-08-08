import React from 'react';
import classNames from 'classnames';

export default ({ product }) => {

  if (!product) {
    return <i>No Product Selected</i>;
  }

  const tableClass = classNames({
    table: true,
    'table-striped': true
  });

  return (
    <table className={tableClass}>
      <thead>
        <tr>
          <th>Product</th>
          <th>{product.attributes.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Required input data</td>
          <td></td>
        </tr>
        <tr>
          <td>Required input biomaterial</td>
          <td></td>
        </tr>
        <tr>
          <td>Expected Data output</td>
          <td></td>
        </tr>
        <tr>
          <td>Biomaterial output</td>
          <td></td>
        </tr>
        <tr>
          <td>Options</td>
          <td></td>
        </tr>
        <tr>
          <td>Reprogramming technology</td>
          <td></td>
        </tr>
        <tr>
          <td>Growth Conditions</td>
          <td></td>
        </tr>
        <tr>
          <td>Subclone</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}