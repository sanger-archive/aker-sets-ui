import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import DatePicker from 'react-bootstrap-date-picker';
import FontAwesome from './font_awesome.es6';
import { Panel, Heading, Body } from './panel.es6'
import { connect } from 'react-redux';
import {updateFilterName, updateFilterComparator, updateFilterValue, removeFilter, addFilter, setCurrentSearch, performSearch} from '../actions/index.es6';
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

    const { filters, fields, dispatch} = this.props;
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
            <span style={{ color: '#367FD2', float: 'right' }}>What&#39;s this?</span>
          </OverlayTrigger>
        </Heading>
        <Body>
          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={300}>
            { filter_rows }
          </CSSTransitionGroup>
          <button onClick={this.performSearch} style={{float: 'right'}} type="submit" className="btn btn-primary set-current-search">Search</button>
          <button onClick={() => dispatch(addFilter())} style={{float: 'right', marginRight: '10px'}} type="submit" className="btn btn-success add-filter-row">
            <FontAwesome icon="plus" size="lg" style={{color: 'white'}} />
          </button>
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
      default:
        return <InputTextField value={filter.value} onChange={onChange} />
    }
  }
}

const InputTextField = ({value, onChange, disabled = false}) => {
  return <input type="text" className="form-control" onChange={onChange} value={value} placeholder={ !disabled ? "Enter a value" : "" } disabled={disabled} />
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
