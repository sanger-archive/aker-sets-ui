import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel.es6';
import { paginateTo } from '../actions/index.es6'
import ButtonsPanel from '../components/buttons_panel.es6';

// Use this object to control the "friendly_name" and visibility of the fields
import FIELD_NAMES from '../lib/field_names.es6';

class SearchResultsTable extends React.Component {

  render() {
    const { headings, current, items, links, sets, dispatch, meta, loading } = this.props;
    const hasResults = items.length != 0;
    let title = 'Results'

    // Display the totals and current page of results
    if (meta.total) {
      title += ` (${meta.total}), showing page ${meta.page} (of ${links.last ? links.last.page : meta.page})`
    }

    return (
      <div>
        <PaginationLinks links={links} dispatch={dispatch}></PaginationLinks>

        <Panel>
          <div className="row">
            <div className="col-md-12">
              { hasResults && <ButtonsPanel /> }
            </div>
          </div>

          <Heading title={title}>
          </Heading>

          <Body style={{overflow: 'scroll'}}>
            <table className="table table-striped table-hover search-results-table">
              <thead>
                <tr>
                  { headings.map((heading, index) => {
                      if (FIELD_NAMES.hasOwnProperty(heading.toString())
                              && FIELD_NAMES[heading.toString()].display) {
                        return (
                          <th key={index}>
                            {FIELD_NAMES[heading.toString()].friendly_name}
                          </th>
                        )
                      }
                    })
                  }
                </tr>
              </thead>
              <tbody>
                { items.map((item, index) => { return <SearchResultsRow headings={headings} item={item} key={index} />; }) }
              </tbody>
            </table>
          </Body>
        </Panel>

        <PaginationLinks links={links} dispatch={dispatch} />

      </div>
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
        if (FIELD_NAMES.hasOwnProperty(heading.toString())
                && FIELD_NAMES[heading.toString()].display) {

          const hasValue = item.hasOwnProperty(heading) && item[heading] != null;
          const spanStyle = hasValue ? {} : { color: '#ddd' };

          return (
            <td key={index} >
              <span style={spanStyle}>
                { (hasValue && item[heading].toString()) || '<blank>' }
              </span>
            </td>
          );
        }
      }) }
    </tr>
  );
}

const PaginationLinks = (props) => {
  const { links, dispatch } = props;

  if (links.length == 0){
    return null
  }

  const handleClick = (pageNumber) => dispatch(paginateTo(pageNumber));

  let displayLinks = [];
  displayLinks.push(<PaginationLink link={links.first} label='First' title='First' onClick={handleClick} key='First' />)
  displayLinks.push(<PaginationLink link={links.prev} label='Previous' title='Previous' onClick={handleClick} key='Previous' />)
  displayLinks.push(<PaginationLink link={links.next} label='Next' title='Next' onClick={handleClick} key='Next' />)
  displayLinks.push(<PaginationLink link={links.last} label='Last' title='Last' onClick={handleClick} key='Last' />)

  return (
    <div className="row">
      <div className="col-md-12">
        <nav aria-label="Page navigation" className="pull-right">
          <ul className="pagination">
            {displayLinks}
          </ul>
        </nav>
      </div>
    </div>
  );
}

class PaginationLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (this.props.link && this.props.link.page) {
      this.props.onClick(this.props.link.page);
    }
  }

  render() {
    const { link, label, title, onClick } = this.props;

    return (
      <li className={!link && 'disabled'} >
        <a href='#' aria-label={label} onClick={this.handleClick} >
          <span aria-hidden="true">{title}</span>
        </a>
      </li>
    );
  }
}
