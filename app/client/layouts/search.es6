import React from 'react';
import FilterPanel from '../components/filter_panel.es6';
import CurrentSearch from '../components/current_search.es6';
import SearchResultsTable from '../components/search_results_table.es6';
import ButtonsPannel from '../components/buttons_panel.es6';

const Search = ({ search }) => {

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">
          <a href="/users/sign_out" className='btn btn-default vcenter' style={{float: 'right', marginTop: '40px'}} data-method='delete'>Log Out</a>
          <h1 className="page-header">Set Shaper <small>Curate Samples</small></h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <FilterPanel filters={search.filters} fields={search.fields} />
        </div>

        <div className="col-md-6">
          <CurrentSearch current={search.current} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <SearchResultsTable headings={ Object.keys(search.fields) } current={search.current} items={ search.results } links={ Object.entries(search.links) } />
        </div>
      </div>

    </div>
  )
};

Search.defaultProps = {}

export default Search;