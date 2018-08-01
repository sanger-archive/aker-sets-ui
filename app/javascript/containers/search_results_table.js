import React from 'react';
import { connect } from 'react-redux';
import { Panel, Heading, Body } from '../components/panel';
import { paginateTo } from '../actions/index'
import ButtonsPanel from './buttons_panel';
import PaginationLinks from '../components/pagination_links';
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
