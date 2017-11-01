import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import SelectableSetTable from '../containers/selectable_set_table.es6';
import DroppableSelectedSet from '../containers/droppable_selected_set.es6';
import LockedSelectedSet from '../containers/locked_selected_set.es6';
import { Panel, Heading, Body, Footer } from '../components/panel.es6';
import SetPanel, { SetPanelComponent } from '../components/set_panel.es6';
import BottomSetPanel from '../components/bottom_set_panel.es6';
import SetForm from '../containers/add_set_form.es6';
import FontAwesome from '../components/font_awesome.es6';
import UserMessage from '../components/user_message.es6';

const SetShaper = ({ set, resource, user_set_ids }) => {

  let basename = '/simple';

  if (typeof RELATIVE_URL_ROOT != 'undefined') {
    basename = RELATIVE_URL_ROOT + basename;
  }

  let resourceName = resource.attributes.name;
  let icon = <FontAwesome icon="lock" style={{"color": "#e61c1c"}} />;

  if (resource.attributes.locked) {
    resourceName = <span>{resourceName} {icon}</span>;
  }

  return (
    <Router basename={ basename }>
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-12">
            <h1>{"Set Browser"}</h1>
          </div>
        </div>

        <UserMessage></UserMessage>

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
                    <SelectableSetTable selectionType="top" setIdList={user_set_ids} hideOwner addLink />
                  </div>
                  <div role="tabpanel" className="tab-pane" id="allSets">
                    <SelectableSetTable selectionType="top" addLink />
                  </div>
                </div>

              </Body>

              <Footer>
                <SetForm />
              </Footer>
            </Panel>
          </div>

          <div className="col-md-9">
            <Switch>
              <Route exact path='/sets/:set_uuid' component={ SetPanel } />
              <Route component={ SetPanelComponent } />
            </Switch>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">

            <Panel>

              <Body style={{height: '320px', overflowY: 'scroll'}}>
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active"><a href="#mySetsBottom" aria-controls="mySets" role="tab" data-toggle="tab">My Sets</a></li>
                  <li role="presentation"><a href="#sets" aria-controls="sets" role="tab" data-toggle="tab">All Sets</a></li>
                </ul>

                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="mySetsBottom">
                    <SelectableSetTable selectionType="bottom" setIdList={user_set_ids} hideOwner />
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
    </Router>
  )
};

SetShaper.defaultProps = {
  set: { attributes: { name: ''}},
  resource: { attributes: { name: ''}}
}

export default SetShaper;
