import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

export default (WrappedComponent) => {
  return React.createClass({
    render() {
      const { connectDropTarget, isOver, ...rest } = this.props;
      return (
        <div style={{ opacity: isOver ? 0.5 : 1 }}>
          <WrappedComponent
            {...rest}
            ref={instance => connectDropTarget(findDOMNode(instance))} />
        </div>
      );
    }

  });
}