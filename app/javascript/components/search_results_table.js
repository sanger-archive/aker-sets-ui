import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from './panel';
import { paginateTo } from '../actions/index'
import ButtonsPanel from '../components/buttons_panel';
import { Link } from 'react-router-dom'
import qs from 'qs';

class SearchResultsTable extends React.Component {

  render() {
    const { fields, headings, items, links, sets, dispatch, meta, loading } = this.props;
    const hasResults = items.length != 0;

    const handleClick = (page) => dispatch(paginateTo(page));

    let title = 'Results'
    if (meta.total) {
      title += ` (${meta.total}), showing page ${meta.page} (of ${links.last ? links.last.page : meta.page})`
    }

    return (
      <div>
        <Panel>
          <div className="row">
            <div className="col-md-12">
              { hasResults && <ButtonsPanel /> }
            </div>
          </div>
          <Heading title={title}>
          </Heading>
          <PaginationLinks links={links} onClick={handleClick} />

          <Body style={{overflowX: 'scroll', paddingBottom: '0', paddingTop: '0'}}>
            <table className="table table-striped table-hover search-results-table">
              <thead>
                <tr>
                  { // Use the "display" property to toggle displaying the heading
                    // and the "friendly_name" to show a "friendly" version of
                    // the field
                    Object.keys(fields).map((name, index) => {
                      if (fields[name].friendly_name && fields[name].show_on_set_results) {
                          return (
                            <th key={index}>
                              {fields[name].friendly_name}
                            </th>
                          )
                        }
                    })
                  }
                </tr>
              </thead>
              <tbody>
                { items.map((item, index) => { return <SearchResultsRow headings={Object.keys(fields)} fields={fields} item={item} key={index} />; }) }
              </tbody>
            </table>
          </Body>
          <PaginationLinks links={links} meta={meta} onClick={handleClick} />
        </Panel>
      </div>
    );
  }
}

SearchResultsTable = connect()(SearchResultsTable);
export default SearchResultsTable;

const SearchResultsRow = (props) => {
  const { fields, item } = props;
  return (
    <tr>
      { Object.keys(fields).map((name, index) => {
          if (fields[name].friendly_name && fields[name].show_on_set_results) {

            const hasValue = item.hasOwnProperty(name) && item[name] != null;
            const spanStyle = hasValue ? {} : { color: '#ddd' };

            return (
              <td key={index} >
                <span style={spanStyle}>
                  { (hasValue && item[name].toString()) || '<blank>' }
                </span>
              </td>
            );
          }
        })
      }
    </tr>
  );
}

export const PaginationLinks = (props) => {
  const { links, meta, match, location, onClick } = props;

  let paginationLinks = [];

  // TODO: A better way of doing this?
  if (match && location) {
    paginationLinks.push(<PaginationLink link={links.first} match={match} location={location} title='First' key='First' />)
    paginationLinks.push(<PaginationLink link={links.prev} match={match} location={location} title='Previous' key='Previous' />)
    paginationLinks.push(<PaginationLink link={links.next} match={match} location={location} title='Next' key='Next' />)
    paginationLinks.push(<PaginationLink link={links.last} match={match} location={location} title='Last' key='Last' />)
  } else {
    paginationLinks.push(<PaginationAnchor link={links.first} onClick={onClick} title='First' key='First' />)
    paginationLinks.push(<PaginationAnchor link={links.prev} onClick={onClick} title='Previous' key='Previous' />)
    paginationLinks.push(<PaginationAnchor link={links.next} onClick={onClick} title='Next' key='Next' />)
    paginationLinks.push(<PaginationAnchor link={links.last} onClick={onClick} title='Last' key='Last' />)
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="col-md-2 pull-left">
         <span className="badge badge-secondary">
           { meta && meta.page && `Page ${meta.page}` }
         </span></div>
        <nav aria-label="Page navigation" className="pull-right">
          <ul className="pagination">
            { paginationLinks }
          </ul>
        </nav>
      </div>
    </div>
  );
}

const PaginationLink = ({ link, match, location, title }) => {
  const pathname = location.pathname;
  let search = '';

  if (link) {
    // TODO: a better way of doing this?
    search = qs.stringify(Object.assign({}, qs.parse(location.search, { ignoreQueryPrefix: true }), { page: link.page }), { addQueryPrefix: true });
  }

  const to = { pathname, search };

  return (
    <li className={!link ? 'disabled' : undefined } >
      <Link to={ to } aria-label={title}>
        <span aria-hidden="true">{title}</span>
      </Link>
    </li>
  );
}

const PaginationAnchor = ({ link, title, onClick }) => {
  return (
    <li className={!link ? 'disabled' : undefined } >
      <a href='#' aria-label={title} onClick={ (e) => { e.preventDefault(); onClick(link.page); } }>
        <span aria-hidden="true">{title}</span>
      </a>
    </li>
  );
}
