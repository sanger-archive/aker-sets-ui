import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { performSearch } from '../actions/index.es6'
import { filterQuery } from '../lib/utils.es6';
import queryMaterialBuilder from '../lib/query_builder.es6'


class CurrentSearch extends React.Component {
  constructor(props) {
    super(props);
    this.performQuerySearch = this.performQuerySearch.bind(this);
  }

  performQuerySearch(event) {
    event.preventDefault();
    this.props.dispatch(performSearch())
  }

  render() {

    const emptyFiltersRow = (<p key="emptySearch" className="bg-info">No current search</p>);

    let filterRows = [];
    const filteredCurrent = filterQuery(this.props.current);

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
          <button disabled={filteredCurrent==0} onClick={this.performQuerySearch} style={{width: '100%'}} type="submit" className="btn btn-success">Search</button>
        </Body>
      </Panel>
    )
  }

}

CurrentSearch = connect()(CurrentSearch);

export default CurrentSearch