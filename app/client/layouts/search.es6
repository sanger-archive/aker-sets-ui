import React from 'react';
import FilterPanel from '../components/filter_panel.es6';
import CurrentSearch from '../components/current_search.es6';
import SearchResultsTable from '../components/search_results_table.es6';
import ButtonsPannel from '../components/buttons_panel.es6';
import UserMessage from '../components/user_message.es6';

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
            <FilterPanel filters={search.filters} fields={search.fields} />
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
              headings={ Object.keys(search.fields) }
              current={search.current}
              items={ search.results }
              links={ search.links }
              sets={search.sets}
              meta={search.meta}
              loading={loading} />
          </div>
        </div>

      </div>
    </div>
  )
};

Search.defaultProps = {}

export default Search;
