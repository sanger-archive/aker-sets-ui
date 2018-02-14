import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { currentSearchQueryBuilder } from '../lib/utils.es6';
import queryMaterialBuilder from '../lib/query_builder.es6'

class CurrentSearch extends React.Component {

  render() {

    const emptyFiltersRow = (<p key="emptySearch">No current search</p>);

    let filterRows = [];
    const filteredCurrent = currentSearchQueryBuilder(this.props.current);

    if (filteredCurrent.length == 0) {
      filterRows.push(emptyFiltersRow)
    } else {
      filterRows = filteredCurrent.map((filter, index) => {
        let operator = '';

        if (index > 0) {
          operator = 'AND ';
        }

        let value = filter.value;
        if (filter.type=='date') {
          value = new Date(value).toDateString();
        }

        return (
          <p key={index}>
            <strong>{operator}{filter.name} </strong>
            <span className="label label-primary">{filter.comparator}</span>
            <em> "{value}"</em>
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

CurrentSearch = connect()(CurrentSearch);
export default CurrentSearch
