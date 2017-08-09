import React from 'react';
import {Panel, Heading, Body} from './panel.es6';
import LockedSelectedSet from '../containers/locked_selected_set.es6';
import DroppableSelectedSet from '../containers/droppable_selected_set.es6';

const SetPanel = (props) => {
  let set = props.set;
  let title = props.title;
  if (!set.id) {
    return (
      <Panel key='set-'>
        <Heading title='No set selected'/>
      </Panel>
    );
  }
  return (
      <Panel key={`set-${set.id}`}>
        <Heading title={title} />

        <Body style={{height: '424px', overflowY: 'scroll'}}>
          { set.attributes.locked ? <LockedSelectedSet set={set} /> : <DroppableSelectedSet set={set} /> }
        </Body>

      </Panel>
  );
};

export default SetPanel;
