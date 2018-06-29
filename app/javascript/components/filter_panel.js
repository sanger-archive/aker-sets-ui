import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import DatePicker from 'react-bootstrap-date-picker';
import FontAwesome from './font_awesome';
import { Panel, Heading, Body } from './panel'
import { connect } from 'react-redux';
import {updateFilterName, updateFilterComparator, updateFilterValue, removeFilter, addFilter, setCurrentSearch, performSearch, updateSortBy, updateSortOrder} from '../actions/index';
import { Popover, OverlayTrigger } from 'react-bootstrap'

class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(event) {
    event.preventDefault();
    this.props.dispatch(setCurrentSearch());
    this.props.dispatch(performSearch());
  }

  render() {

    const { filters, fields, dispatch, sortBy, sortOrder} = this.props;
    const filter_rows = filters.map((filter, index) => {
      return <FilterRow
                fields={fields}
                filter={filter}
                key={filter.id}
                onNameChange={(e) => dispatch(updateFilterName(index, e.target.value))}
                onComparatorChange={(e) => dispatch(updateFilterComparator(index, e.target.value))}
                onValueChange={(e) => dispatch(updateFilterValue(index, e.target.value))}
                onRemove={(e) => { dispatch(removeFilter(index)) }} />
    });

    return (
      <Panel>
        <Heading title='Add Filter'>
          <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverHover}>
            <span style={{ color: '#367FD2', float: 'right' }}><FontAwesome icon="question" style={{"color": "#2196F3"}} /></span>
          </OverlayTrigger>
        </Heading>
        <Body>
          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={300}>
            { filter_rows }
          </CSSTransitionGroup>
          <button onClick={this.performSearch} style={{float: 'right', marginTop: '20px'}} type="submit" className="btn btn-primary set-current-search">Search</button>
          <button onClick={() => dispatch(addFilter())} style={{float: 'right', marginRight: '10px', marginTop: '20px'}} type="submit" className="btn btn-success add-filter-row">
            <FontAwesome icon="plus" size="lg" style={{color: 'white'}} />
          </button>
          <SortRow sortBy={sortBy}
                    sortOrder={sortOrder}
                    fields={fields}
                    onSortByChange={(e) => dispatch(updateSortBy(e.target.value))}
                    onSortOrderChange={(e) => dispatch(updateSortOrder(parseInt(e.target.value)))}
                    />
        </Body>
      </Panel>
    )
  }
}

FilterPanel = connect()(FilterPanel);
export default FilterPanel;

export class FilterRow extends React.Component {

  render() {
    let {fields, filter, onNameChange, onComparatorChange, onValueChange, onRemove} = this.props;

    // We want to sort the list of filters based on their friendly names
    let field_names = Object.keys(fields)
    field_names.sort(function(element1, element2) {
      var first = fields[element1].friendly_name.toLowerCase()
      var second = fields[element2].friendly_name.toLowerCase()

      if (first < second) {
        return -1;
      }
      if (first > second) {
        return 1;
      }
      return 0;
    });

    const options = field_names.map((name, index) => {
      return (<option value={name} key={index}>{fields[name] && fields[name].friendly_name || name}</option>);
    });

    return (
      <div className="row" style={{'marginBottom': '10px'}}>
        <div className="col-md-4">
          <select value={filter.name} className="form-control change-field-name" onChange={onNameChange}>
            <option value='' key='emptyOption' disabled>Select a Property</option>
            { options }
          </select>
        </div>
        <div className="col-md-3">
          <ContextualComparator filter={filter} fields={fields} onChange={onComparatorChange} />
        </div>
        <div className="col-md-4">
          <ContextualValue filter={filter} fields={fields} onChange={onValueChange} />
        </div>
        <div className="col-md-1">
          <button onClick={onRemove} type="submit" className="btn btn-link remove-filter-row pull-right">
            <FontAwesome icon="times" size="lg" style={{color: 'red'}} />
          </button>
        </div>
      </div>
    )
  }
}

export class ContextualComparator extends React.Component {

  render() {
    const {filter, fields, onChange} = this.props;
    const field = fields[filter.name];
    const options = (field) ? field.comparators : [];
    return <ListField value={filter.comparator} options={options} onChange={onChange} />
  }

}

export class ContextualValue extends React.Component {
  render() {
    const { filter, fields, onChange } = this.props

    const field = fields[filter.name];

    if (!field) {
      return <InputTextField value={filter.value} onChange={onChange} disabled={true} />;
    }

    const dateOnChange = (utcDateTime) => {
      onChange({ target: { value: utcDateTime }} );
    }

    switch(field.type) {
      case 'list':
      case 'boolean':
        return <ListField value={filter.value} options={field.allowed} onChange={onChange} />
      case 'date':
        return <DatePicker value={filter.value} onChange={dateOnChange} />
      case 'string':
        return <InputTextField value={filter.value} onChange={onChange} />
      case 'float':
        return <InputNumField value={filter.value} onChange={onChange} step="0.01"/>
      default:
        return <InputTextField value={filter.value} onChange={onChange} />
    }
  }
}

const InputTextField = ({value, onChange, disabled = false}) => {
  return <input type="text" className="form-control" onChange={onChange} value={value} placeholder={ !disabled ? "Enter a value" : "" } disabled={disabled} />
};

class SortRow extends React.Component {
  render() {
    const searchableFields = Object.keys(this.props.fields).filter(field => this.props.fields[field]['show_on_set_results'] == true)
    const optionTags = searchableFields.map((field, index) => {
      return <option value={field} key={index}>{this.props.fields[field]['friendly_name']}</option>
    });
    return (
      <div className="row">
        <div className="col-md-4 col-xs-4">
          <label>
            Sort By:
            <select value={this.props.sortBy} onChange={this.props.onSortByChange} className="form-control">
              { optionTags }
            </select>
          </label>
        </div>
        <div className="col-md-3 col-xs-4">
          <label>
            Order:
            <select value={this.props.sortOrder} onChange={this.props.onSortOrderChange} className="form-control">
              <option value='1'>Ascending</option>
              <option value='-1'>Descending</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

const InputNumField = ({value, onChange, step, disabled = false}) => {
  return <input type="number" step={step} className="form-control" onChange={onChange} value={value} placeholder={ !disabled ? "Enter a value" : "" } disabled={disabled} />
};

const ListField = ({value, options, onChange, includeEmptyRow}) => {
  let emptyOption = '';
  const optionTags = options.map((option, index) => {
    return <option value={option} key={index}>{option}</option>
  });

  if (includeEmptyRow) {
    emptyOption = <option value='' key='emptyOption'> </option>
  }

  return (
    <select value={value} className="form-control" onChange={onChange} disabled={options.length == 0}>
      { emptyOption }
      { optionTags }
    </select>
  );
}

const popoverHover = (
  <Popover id="popover-trigger-hover-focus" title="What's this?">
    <p>
      This page allows you to search for materials that match a set of search criteria.<br/>
      Build up a search by selecting criteria (e.g. phenotype), and adding them to your query. The more criteria you add, the more restrictive your search will be.<br/>
      Run the search query by pushing the Search button. The results (if any) will be shown below. Use the next and previous links to view more pages of results.<br/>
      When you have a list of materials that you are happy with, you can add or remove them from a set, or apply/unapply permission stamps to the list, to update the privileges. (You can only alter the privileges of materials that you own.)<br/>
      Trying to perform operations on long lists will take a long time with the current version of the software.
      </p>
  </Popover>
);
