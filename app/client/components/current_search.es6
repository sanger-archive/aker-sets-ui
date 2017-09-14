import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { currentSearchQueryBuilder } from '../lib/utils.es6';
import queryMaterialBuilder from '../lib/query_builder.es6'

class CurrentSearch extends React.Component {

  render() {

    const emptyFiltersRow = (<p key="emptySearch" className="bg-info">No current search</p>);

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

        return (
          <p key={index}>
            <strong>{operator}{filter.name} </strong>
            <span className="label label-primary">{filter.comparator}</span>
            <em> "{filter.value}"</em>
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