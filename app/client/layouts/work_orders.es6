import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import SetTable from '../containers/set_table.es6';
import SelectedSet from '../containers/selected_set.es6';
import ProductsPanel from '../containers/products_panel.es6';
import SelectedWorkOrderDetails from '../containers/selected_work_order_details.es6';
import WorkOrderSummary from '../containers/work_order_summary.es6';
import { Panel, Heading, Body } from '../components/panel.es6';

const WorkOrder = ({ set }) => {

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">Order Work</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Panel>
            <Heading title="Products" />

            <Body style={{height: '280px', overflowY: 'scroll'}}>
              <ProductsPanel />
            </Body>
          </Panel>
        </div>

        <div className="col-md-9">
          <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>

            <Panel>
              <Heading />

              <Body>
                <SelectedWorkOrderDetails />
              </Body>

            </Panel>

          </ReactCSSTransitionGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Panel>
            <Heading title="Sets" />

            <Body style={{height: '280px', overflowY: 'scroll'}}>
              <SetTable />
            </Body>
          </Panel>
        </div>

        <div className="col-md-9">
          <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>
            <Panel key={`set-${set.id}`}>
              <Heading title={set.attributes.name} />

              <Body>
                <SelectedSet set={set} />
              </Body>

            </Panel>
          </ReactCSSTransitionGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">

        </div>

        <div className="col-md-9">
          <Panel>
            <Heading title="Work Order Summary" />

            <Body>
              <WorkOrderSummary />
            </Body>

          </Panel>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">

        </div>

        <div style={{textAlign: 'right'}} className="col-md-9">
          <button type="button" style={{marginRight: '5px'}} className="btn btn-default">Cancel</button>
          <button type="button" className="btn btn-primary">Order</button>
        </div>
      </div>

    </div>
  )
};

WorkOrder.defaultProps = {
  set: { attributes: { id: '', name: '' } }
}

export default WorkOrder;