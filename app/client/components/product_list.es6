import React from 'react';
import FontAwesome from '../components/font_awesome.es6';

export const decorators = {
  icon: <FontAwesome icon="globe" />
}

const ProductList = ({ products, selected_product, onProductClick, decorators }) => {
  return (
    <ul className="list-unstyled">
      { products.map((product, index) => {

        const style = { cursor: 'pointer' };

        if (product.id == selected_product) style['fontWeight'] = 'bold';

        return (
          <li style={style} onClick={(evt) => onProductClick(product, index, evt)} key={index}>
            { decorators.icon } {product.attributes.name}
          </li>
        );
      }) }
    </ul>
  )
}

ProductList.defaultProps = {
  products: [],
  selectedProduct: null,
  onProductClick: () => {},
  decorators
};

export default ProductList;

