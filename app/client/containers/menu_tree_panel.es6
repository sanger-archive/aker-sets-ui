import React from 'react';
import { connect } from 'react-redux';
import { readEndpoint } from 'redux-json-api';

import {Treebeard, decorators} from 'react-treebeard';
import TreebeardStyle from '../styles/treebeard.es6';
import * as filters from '../lib/menu_tree_filters.es6';
import FontAwesome from '../components/font_awesome.es6';
import { Panel, Heading, Body, Footer } from '../components/panel.es6';
import { debounce } from '../lib/utils.es6';

decorators.Toggle = (props) => {
  const {node} = props;
  let icon;

  switch(node.type) {
    case 'programs':
      icon = (node.toggled) ? 'folder-open-o' : 'folder-o';
      break;
    case 'collections':
      icon = 'file-text-o';
      break;
    default:
      if (node.children.length > 0) icon = (node.toggled) ? 'caret-down' : 'caret-right';
  }

  return (
    <FontAwesome icon={icon} />
  )
};

decorators.Header = (props) => {
    const style = props.style;
    return (
      <a onClick={ (e) => e.preventDefault() } href="#">{props.node.name}</a>
    );
};

class Container extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {decorators, onClick, node} = this.props;

        return (
          <div onClick={onClick} >
            <decorators.Toggle node={node} />
            <decorators.Header node={node} />
          </div>
        );
    }
}

decorators.Container = Container

class MenuTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredData: [],
      cursor: { _id: '', type: '' }
    };

    this.onToggle = this.onToggle.bind(this)
    this.filterTree = debounce(this.filterTree.bind(this), 150);
  }

  filterTree(searchValue) {

    searchValue = this._input.value.trim();

    if (!searchValue) {
      this.setState({ filteredData: [] });
      return;
    }

    let filtered = this.buildTree()
      .map((node) => filters.filterTree(node, searchValue))
      .map((filteredNode) => filters.expandFilteredNodes(filteredNode, searchValue));

    this.setState({ filteredData: filtered });
  }

  componentDidMount() {
    this.props.load();
  }

  onToggle(node, toggled) {
    if (this.state.cursor) { this.state.cursor.active = false; }
    node.active = true;
    if (node.children) { node.toggled = toggled; }
    this.props.onToggle(node._id, node.type);
    this.setState({ cursor: node })
  }

  buildTree() {
    return build_tree(this.props.api.programs.data, this.props.api, this.state.cursor, this.props.entities);
  }

  render() {

    const data = (this.state.filteredData.length > 0) ? this.state.filteredData : this.buildTree();

    return (
      <div>
        <div className="input-group">
          <input ref={(n) => this._input = n } onKeyUp={this.filterTree} type="text" className="form-control" placeholder="Search..." aria-describedby="menu_search_bar" />
          <span className="input-group-addon" id="menu_search_bar">
            <FontAwesome icon="search" />
          </span>
        </div>

        <hr />

        <Treebeard decorators={decorators} data={data} onToggle={this.onToggle} style={TreebeardStyle} />
      </div>
    )
  }
}

const mapStateToProps = ({ api }, ownProps) => {
  return { api, entities: ownProps.entities };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      dispatch(readEndpoint(ownProps.source))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuTree);

const build_tree = (tree, api, cursor, entities = ['programs', 'collections', 'projects', 'aims', 'proposals']) => {
  return tree.reduce((memo, leaf) => {

    let ret = {
      _id: leaf.id,
      name: leaf.attributes.name,
      type: leaf.type
    };

    if (leaf.id == cursor._id && leaf.type == cursor.type) {
      ret.toggled = cursor.toggled;
    }

    ret.children = Object.keys(leaf.relationships)
      // Filter out the relationship entities we don't want...
      .filter((relationship) => entities.indexOf(relationship) != -1 )
      .sort()
      .reduce((memo, relationship) => {
        // Get the relation node
        const relation = leaf.relationships[relationship];

        // If it doesn't have any data we don't care about it
        if (!relation.data || relation.data.length == 0) return memo;

        // If it does, find it's info in the included array
        const child = relation.data.map((datum) => {
          return api[datum.type].data.find((search) => search.id == datum.id)
        })

        // Continue building the tree with this info
        memo.push(...build_tree(child, api, cursor));

        return memo;
      }, []);

    if (!ret.children.every( child => !child.toggled )) {
      ret.toggled = true;
    }

    memo.push(ret);

    return memo;

  }, []);
};
