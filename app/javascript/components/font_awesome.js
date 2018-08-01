import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FontAwesome = ({ fw, icon, size, style, onClick }) => {
  const iClass = classNames({
    'fa': true,
    'fa-fw': fw,
    [`fa-${icon}`]: icon,
    [`fa-${size}`]: size
  });

  return (
    <i style={style} onClick={onClick} className={iClass} aria-hidden="true"></i>
  )
}

FontAwesome.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
  fw:   PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object
}

FontAwesome.defaultProps = {
  fw: true,
  style: {}
}

export default FontAwesome;
