import React from 'react';
import { Panel, Heading, Body } from './panel';
import { currentSearchQueryBuilder } from '../lib/utils';
import queryMaterialBuilder from '../lib/query_builder'
import PropTypes from 'prop-types';

const CurrentSearch = ({ current }) => {
  const emptyFiltersRow = (<p key="emptySearch">No current search</p>);

  let filterRows = [];
  const filteredCurrent = currentSearchQueryBuilder(current);

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
      } else if (filter.name=='concentration') {
        value += "ng/\u03bcL"
      } else if (filter.name=='volume') {
        value += "\u03bcL"
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

CurrentSearch.propTypes = {
  current: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    comparator: PropTypes.string,
    value: PropTypes.string
  })).isRequired
}

CurrentSearch.defaultProps = {
  current: []
}

export default CurrentSearch
