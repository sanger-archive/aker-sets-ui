import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import MenuTreePanel from '../containers/menu_tree_panel.es6';
import SelectedEntity from '../containers/selected_entity.es6';
import { Panel, Heading, Body } from '../components/panel.es6';

export default ({ entity, source, onToggle }) => {

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">View Collection</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Panel>
            <Heading title="Collections" />

            <Body>
              <MenuTreePanel
                source={source}
                onToggle={onToggle}
              />
            </Body>
          </Panel>
        </div>

        <div id="content" className="col-md-9">
          <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>
            <Panel>
              <Heading title={entity.attributes.name} />

              <Body>
                <SelectedEntity entity={entity} />
              </Body>

            </Panel>
          </ReactCSSTransitionGroup>
        </div>
      </div>

    </div>
  )
};