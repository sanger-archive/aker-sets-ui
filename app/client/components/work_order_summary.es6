import React from 'react';
import classNames from 'classnames';

export default ({ product, set }) => {

  let productCell = (product) ? product.attributes.name : <i>No product selected</i>;
  let setCell     = (set) ? set.meta.size : <i>No set selected</i>;

  const tableClass = classNames({
    table: true,
    'table-striped': true
  });

  return (
    <table className={tableClass}>
      <thead>
        <tr>
          <th>Service Required</th>
          <th>Number Samples Submitted</th>
          <th>Estimated Total cost (£)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ productCell }</td>
          <td>{ setCell }</td>
          <td>x</td>
        </tr>
      </tbody>
    </table>
  )
}