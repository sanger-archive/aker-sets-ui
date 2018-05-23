import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class FontAwesome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const iClass = classNames({
      'fa': true,
      'fa-fw': this.props.fw,
      [`fa-${this.props.icon}`]: this.props.icon,
      [`fa-${this.props.size}`]: this.props.size
    });

    return (
      <i style={this.props.style} onClick={this.props.onClick} className={iClass} aria-hidden="true"></i>
    )
  }
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
