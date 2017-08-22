import React from 'react';
import { Panel, Heading, Body } from './panel.es6';

export default class CurrentSearch extends React.Component {

  render() {

    const {current} = this.props;
    const emptyFiltersRow = (<p key="emptySearch" className="bg-info">No current search</p>);

    let filterRows = [];

    if (current.length == 0) {
      filterRows.push(emptyFiltersRow)
    } else {
      filterRows = current.map((filter, index) => {
        let operator = '';

        if (index > 0) {
          operator = 'AND ';
        }

        return (
          <p key={index}>
            <strong>{operator}{filter.name} </strong>
            <span className="label label-primary">{filter.comparator}</span>
            <em> {filter.value}</em>
          </p>
        );
      });
    }

    return (
      <Panel>
        <Heading title='Current Search' />
        <Body>
          <div className='well'>
            { filterRows }
          </div>
        </Body>
      </Panel>
    )
  }

}