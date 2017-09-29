import React from 'react';
import {Panel, Heading, Body} from './panel.es6';
import DraggableSelectedCollection from '../containers/draggable_selected_collection.es6';
import PaginationContainer from '../containers/pagination_container.es6';
import { getSelectedBottomLinks } from '../selectors/index.es6';


const BottomSetPanel = (props) => {
  let resource = props.resource;
  let title = props.title;
  if (!resource || !resource.id) {
    return (
      <Panel key='collection-'>
        <Heading title='No set selected'/>
      </Panel>
    );
  }

  return (
    <Panel key={`collection-${resource.id}`}>
      <Heading title={title}></Heading>
      
      <Body style={{height: '231px', overflowY: 'scroll'}}>
        <DraggableSelectedCollection />
      </Body>
      <PaginationContainer getLinks={getSelectedBottomLinks}></PaginationContainer>
    </Panel>
  );
};

export default BottomSetPanel;
