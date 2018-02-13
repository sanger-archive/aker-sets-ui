import React from 'react';
import createReactClass from 'create-react-class';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

export default (WrappedComponent) => {
  return createReactClass({
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