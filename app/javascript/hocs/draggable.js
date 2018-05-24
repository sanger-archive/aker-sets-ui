import React from 'react';
import createReactClass from 'create-react-class';
import { findDOMNode } from 'react-dom';

export default (WrappedComponent, getPreviewNode) => {

  return createReactClass({

    render() {
      const { connectDragSource, connectDragPreview, isDragging, ...rest } = this.props;

      if (typeof getPreviewNode != 'undefined') {
        getPreviewNode(connectDragPreview, rest);
      }

      return (
        <WrappedComponent
          {...rest}
          ref={instance => connectDragSource(findDOMNode(instance))} />
      );
    }

  });
}