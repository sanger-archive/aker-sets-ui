import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import SelectableSetTable from '../containers/selectable_set_table.es6';
import DroppableSelectedSet from '../containers/droppable_selected_set.es6';
import DraggableSelectedCollection from '../containers/draggable_selected_collection.es6';
import LockedSelectedSet from '../containers/locked_selected_set.es6';
import { Panel, Heading, Body, Footer } from '../components/panel.es6';
import SetPanel from '../components/set_panel.es6';
import BottomSetPanel from '../components/bottom_set_panel.es6';
import SetForm from '../containers/add_set_form.es6';
import FontAwesome from '../components/font_awesome.es6';

const SetShaper = ({ set, collection_ids, resource, user_set_ids }) => {

  let setName = set.attributes.name;
  let resourceName = resource.attributes.name;
  let icon = <FontAwesome icon="lock" style={{"color": "#e61c1c"}} />;

  if (set.attributes.locked) {
    setName = <span>{setName} {icon}</span>;
  }

  if (resource.attributes.locked) {
    resourceName = <span>{resourceName} {icon}</span>;
  }

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">
          <a href="/users/sign_out" className='btn btn-default vcenter' style={{float: 'right', marginTop: '40px'}} data-method='delete'>Log Out</a>
          <h1 className="page-header">Set Shaper</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Panel>
            <Heading title="Sets" />

            <Body style={{height: '280px', overflowY: 'scroll'}}>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#mySets" aria-controls="mySets" role="tab" data-toggle="tab">My Sets</a></li>
                <li role="presentation"><a href="#allSets" aria-controls="allSets" role="tab" data-toggle="tab">All Sets</a></li>
              </ul>

              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="mySets">
                  <SelectableSetTable selectionType="top" setIdList={user_set_ids} />
                </div>
                <div role="tabpanel" className="tab-pane" id="allSets">
                  <SelectableSetTable selectionType="top"/>
                </div>
              </div>

            </Body>

            <Footer>
              <SetForm />
            </Footer>
          </Panel>
        </div>

        <div className="col-md-9">
          <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>

            <SetPanel set={set} title={setName} />

          </ReactCSSTransitionGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">

          <Panel>

            <Body style={{height: '320px', overflowY: 'scroll'}}>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#collections" aria-controls="collections" role="tab" data-toggle="tab">Collections</a></li>
                <li role="presentation"><a href="#mySetsBottom" aria-controls="mySets" role="tab" data-toggle="tab">My Sets</a></li>
                <li role="presentation"><a href="#sets" aria-controls="sets" role="tab" data-toggle="tab">All Sets</a></li>
              </ul>

              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="collections">
                  <SelectableSetTable selectionType="bottom" setIdList={collection_ids} />
                </div>
                <div role="tabpanel" className="tab-pane" id="mySetsBottom">
                  <SelectableSetTable selectionType="bottom" setIdList={user_set_ids} />
                </div>
                <div role="tabpanel" className="tab-pane" id="sets">
                  <SelectableSetTable selectionType="bottom"/>
                </div>
              </div>

            </Body>

          </Panel>

        </div>

        <div className="col-md-9">
          <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>
            <BottomSetPanel resource={resource} title={resourceName} />
          </ReactCSSTransitionGroup>
        </div>
      </div>

    </div>
  )
};

SetShaper.defaultProps = {
  set: { attributes: { name: ''}},
  resource: { attributes: { name: ''}}
}

export default SetShaper;