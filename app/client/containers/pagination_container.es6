import React from 'react';
import { connect } from 'react-redux';
import { PaginationLinks } from '../components/search_results_table.es6';
import {fetchMaterialsFromSetByUrl} from '../actions/index.es6';

const linksToPaginatorLink = (links) => {
  if (!links) {
    return {};
  }
  return Object.keys(links).reduce((memo, key) => {
    memo[key] = { page: links[key] }
    return memo;
  }, {});
}

const mapStateToProps = (state, props) => {
  return {
    links: linksToPaginatorLink(props.getLinks(state))
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