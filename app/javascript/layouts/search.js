import React from 'react';
import FilterPanel from '../containers/filter_panel';
import CurrentSearch from '../presentation/current_search';
import SearchResultsTable from '../containers/search_results_table';
import ButtonsPannel from '../containers/buttons_panel';
import UserMessage from '../containers/user_message';

const Search = ({ search, loading }) => {

  return (
    <div>
      <div className="container" id="search">

        <div className="row">
          <div className="col-md-12">
            <h1>{"Set Shaper "}<small>Curate Samples</small></h1>
          </div>
        </div>

        <UserMessage></UserMessage>

        <div className="row">
          <div className="col-md-7">
            <FilterPanel
              filters={search.filters}
              fields={search.fields}
              sortBy={search.sortBy}
              order={search.order} />
          </div>

          <div className="col-md-5">
            <CurrentSearch current={search.current} />
          </div>
        </div>
      </div>

      <div className="container-fluid" id="materials">
        <div className="row">
          <div className="col-md-12">
            <SearchResultsTable
              fields = { search.fields }
              current = { search.current }
              items = { search.results }
              links = { search.links }
              sets = { search.sets }
              meta = { search.meta }
              loading = { loading } />
          </div>
        </div>

      </div>
    </div>
  )
};

Search.defaultProps = {}

export default Search;
