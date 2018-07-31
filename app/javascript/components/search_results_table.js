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

    const handleClick = (search) => {
      const { page } = qs.parse(search, { ignoreQueryPrefix: true })
      dispatch(paginateTo(page));
    }

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
  const { links, route, meta, location, onClick } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="col-md-2 pull-left">
         <span className="badge badge-secondary">
           { meta && meta.page && `Page ${meta.page}` }
         </span></div>
        <nav aria-label="Page navigation" className="pull-right">
          <ul className="pagination">
            <PaginationLink route={route} link={links.first} onClick={onClick} location={location} title='First' key='First' />
            <PaginationLink route={route} link={links.prev} onClick={onClick} location={location} title='Previous' key='Previous' />
            <PaginationLink route={route} link={links.next} onClick={onClick} location={location} title='Next' key='Next' />
            <PaginationLink route={route} link={links.last} onClick={onClick} location={location} title='Last' key='Last' />
          </ul>
        </nav>
      </div>
    </div>
  );
}

PaginationLinks.defaultProps = {
  location: { search: '' }
}

const PaginationLink = ({ route, link, onClick, location, title }) => {
  const pathname = location.pathname;
  let LinkOrA;
  let search;
  let linkProps;

  if (link && location) {
    search = qs.stringify(Object.assign({}, qs.parse(location.search, { ignoreQueryPrefix: true }), { page: link.page }), { addQueryPrefix: true });
  }

  const to = { pathname, search };

  if (route) {
    LinkOrA = PageLink;
    linkProps = { to, title }
  } else {
    LinkOrA = PageAnchor;
    linkProps = { title, onClick, search };
  }

  return (
    <li className={!link ? 'disabled' : undefined } >
      <LinkOrA { ...linkProps }>
        <span aria-hidden="true">{title}</span>
      </LinkOrA>
    </li>
  );
}

const PageLink = ({ to, title, children }) => {
  return (
    <Link to={ to } aria-label={title}>
      { children }
    </Link>
  )
}

const PageAnchor = ({ title, onClick, search, children }) => {
  return (
    <a href='#' aria-label={title} onClick={ (e) => { e.preventDefault(); onClick(search); } }>
      { children }
    </a>
  );
}
