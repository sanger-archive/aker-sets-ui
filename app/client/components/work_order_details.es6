import React from 'react';
import classNames from 'classnames';

export default ({ product, options, values }) => {

  if (!product) {
    return <i>No Product Selected</i>;
  }

  const tableClass = classNames({
    table: true,
    'table-striped': true
  });

  return (
    <form>
      <table className={tableClass}>
        <thead>
          <tr>
            <th>Product</th>
            <th>{product.attributes.name}</th>
          </tr>
        </thead>
        <tbody>
          { options.map(option => {
            return (
              <tr key={`${option.type}-${option.id}`}>
                <td>{ option.attributes.name }</td>
                <td>
                  <select name={option.attributes.name} className="form-control">
                  { option.relationships.product_option_values.data.map((pov, key) => {
                    const option_value = values.find(value => value.id == pov.id)
                    return <option key={key}>{ option_value.attributes.value }</option>
                  })}
                  </select>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </form>
  )
}