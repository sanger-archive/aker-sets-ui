import React from 'react';
import { connect } from 'react-redux';
import { PaginationLinks } from '../components/search_results_table';
import {fetchMaterialsFromSetByUrl} from '../actions/index';

const linksToPaginatorLink = (links, url) => {
  if (!links) {
    return {};
  }
  return Object.keys(links).reduce((memo, key) => {
    if (!links[key].endsWith(url)) {
      memo[key] = { page: links[key] }
    }
    return memo;
  }, {});
}

const mapStateToProps = (state, props) => {
  return {
    links: linksToPaginatorLink(props.getLinks(state), props.getUrl(state)),
    page: props.getPage(state)
  };
}

const mapDispatchToProps = (dispatch, { selectionType }) => {
  return {
    handleClick: (url) => {
      dispatch(fetchMaterialsFromSetByUrl(url));
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PaginationLinks);