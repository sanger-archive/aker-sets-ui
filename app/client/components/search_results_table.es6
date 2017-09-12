import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { paginateTo } from '../actions/index.es6'
import { filterQuery } from '../lib/utils.es6';
import queryBuilder from '../lib/query_builder.es6'
import ButtonsPanel from '../components/buttons_panel.es6';


class SearchResultsTable extends React.Component {

  render() {
    const { headings, current, items, links, sets, dispatch, meta, loading } = this.props;
    const filteredCurrent = filterQuery(current);
    const query = queryBuilder(filteredCurrent)
    const hasResults = items.length!=0;
    let title = 'Results'
    if (meta.total) {
      title += ` (${meta.total})`
    }

    return (
      <Panel>
        <Heading title={title} />
        <Body>
          <table className="table table-striped table-hover search-results-table">
            <thead>
              <tr>
                { headings.map((heading, index) => { return (<th key={index}>{heading}</th>); }) }
              </tr>
            </thead>
            <tbody>
              { items.map((item, index) => { return <SearchResultsRow headings={headings} item={item} key={index} />; }) }
            </tbody>
          </table>

          <PaginationLinks links={links} dispatch={dispatch} />

          <div className="row">
            <div className="col-md-12">
              {items.length != 0 &&
                <ButtonsPanel />
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
      { headings.map((heading, index) => {
        return (<td key={index}>{item.hasOwnProperty(heading) && item[heading]!=null && item[heading].toString() }</td>);
      }) }
    </tr>
  );
}

const PaginationLinks = (props) => {
  const { links, dispatch } = props;


  if (links.length==0){
    return null
  }

  const handleClick = (url) => dispatch(paginateTo(url));

  let displayLinks = [];
  displayLinks.push(<PaginationLink link={links.first} label='First' title='First' onClick={handleClick} key='First' />)
  displayLinks.push(<PaginationLink link={links.prev} label='Previous' title='Previous' onClick={handleClick} key='Previous' />)
  displayLinks.push(<PaginationLink link={links.next} label='Next' title='Next' onClick={handleClick} key='Next' />)
  displayLinks.push(<PaginationLink link={links.last} label='Last' title='Last' onClick={handleClick} key='Last' />)

  return (
    <nav aria-label="Page navigation" className="pull-right">
      <ul className="pagination">
        {displayLinks}
      </ul>
    </nav>
  );
}

class PaginationLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (this.props.link) {
      this.props.onClick(this.props.link.href);
    }
  }

  render() {

    const { link, label, title, onClick } = this.props;

    return (
      <li className={!link && 'disabled'} >
        <a href={link && link.href} aria-label={label} onClick={this.handleClick} >
          <span aria-hidden="true">{title}</span>
        </a>
      </li>
    );
  }

}


