import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { performSearch } from '../actions/index.es6'
import { filterQuery } from '../lib/utils.es6';

class CurrentSearch extends React.Component {

  render() {

    const {current, dispatch} = this.props;
    const emptyFiltersRow = (<p key="emptySearch" className="bg-info">No current search</p>);

    let filterRows = [];
    const filteredCurrent = filterQuery(current);

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
          <button onClick={() => dispatch(performSearch())} style={{width: '100%'}} type="submit" className="btn btn-success">Search</button>
        </Body>
      </Panel>
    )
  }

}

CurrentSearch = connect()(CurrentSearch);

export default CurrentSearch