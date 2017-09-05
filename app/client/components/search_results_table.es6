import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { performSearch } from '../actions/index.es6'
import { filterQuery } from '../lib/utils.es6';
import queryBuilder from '../lib/query_builder.es6'
import ButtonsPannel from '../components/buttons_panel.es6';


class SearchResultsTable extends React.Component {

  render() {
    const { headings, current, items, links, sets, dispatch } = this.props;
    const filteredCurrent = filterQuery(current);
    const query = queryBuilder(filteredCurrent)
    const hasResults = items.length!=0;

    return (
      <Panel>
        <Heading title={'Results'} />
        <Body>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                { headings.map((heading, index) => { return (<th key={index}>{heading}</th>); }) }
              </tr>
            </thead>
            <tbody>
              { items.map((item, index) => { return <SearchResultsRow headings={headings} item={item} key={index} />; }) }
            </tbody>
          </table>
          { links.map((link, index)=>{ return (<button onClick={() => dispatch(performSearch(`/materials_service/`+link[1].href))} style={{float: 'right', marginRight: '10px'}} className="btn btn-link" key={index} >{link[0]}</button>); })}

          <div className="row">
            <div className="col-md-12">
              {items.length != 0 &&
                <ButtonsPannel items={items} sets={sets} dispatch={dispatch} />
              }
            </div>
          </div>

        </Body>
      </Panel>


    );
  }
}

SearchResultsTable = connect()(SearchResultsTable);
export default SearchResultsTable;

const SearchResultsRow = (props) => {
  const { headings, item } = props;
  return (
    <tr>
      { headings.map((heading, index) => { return (<td key={index}>{item[heading]}</td>); }) }
    </tr>
  );
}


