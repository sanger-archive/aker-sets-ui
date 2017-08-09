import React from 'react';
import {Panel, Heading, Body} from './panel.es6';
import DraggableSelectedCollection from '../containers/draggable_selected_collection.es6';

const BottomSetPanel = (props) => {
  let resource = props.resource;
  let title = props.title;
  if (!resource.id) {
    return (
      <Panel key='collection-'>
        <Heading title='No set selected'/>
      </Panel>
    );
  }
  return (
    <Panel key={`collection-${resource.id}`}>
      <Heading title={title} />

      <Body style={{height: '424px', overflowY: 'scroll'}}>
        <DraggableSelectedCollection />
      </Body>

    </Panel>
  );
};

export default BottomSetPanel;
