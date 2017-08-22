import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import DatePicker from 'react-bootstrap-date-picker';
import FontAwesome from './font_awesome.es6';
import { Panel, Heading, Body } from './panel.es6'
import { connect } from 'react-redux';
import {updateFilterName, updateFilterComparator, updateFilterValue, removeFilter, addFilter, setCurrentSearch} from '../actions';
import {debounce} from '../lib/utils.es6';


class FilterPanel extends React.Component {

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
        <Heading title='Add Filter' />
        <Body>
          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={300}>
            {filter_rows}
          </CSSTransitionGroup>
          <button onClick={() => dispatch(setCurrentSearch())} style={{float: 'right'}} type="submit" className="btn btn-primary">Add to Current Search</button>
          <FontAwesome icon="plus" size="lg" style={{float: 'right', color: 'green', cursor: 'pointer', marginRight: '10px'}} onClick={() => dispatch(addFilter())}/>
        </Body>
      </Panel>
    )
  }
}

FilterPanel = connect()(FilterPanel);

export default FilterPanel;

class FilterRow extends React.Component {

  render() {

    let {fields, filter, onNameChange, onComparatorChange, onValueChange, onRemove} = this.props;

    const options = Object.keys(fields).map((name, index) => {
      return (<option value={name} key={index}>{name}</option>);
    });

    return (
      <div className="row" style={{'marginBottom': '10px'}}>
        <div className="col-md-4">
          <select value={filter.name} className="form-control" onChange={onNameChange}>
            <option value='' key='empty key'> </option>
            { options }
          </select>
        </div>
        <div className="col-md-3">
          <ContextualComparator filter={filter} fields={fields} onChange={onComparatorChange} />
        </div>
        <div className="col-md-4">
          <ContextualValue filter={filter} fields={fields} onChange={onValueChange}/>
        </div>
        <div className="col-md-1">
          <FontAwesome icon="times" size="lg" style={{color: 'red', cursor: 'pointer'}} onClick={onRemove} />
        </div>
      </div>
    )
  }
}

class ContextualComparator extends React.Component {

  render() {
    const {filter, fields, onChange} = this.props;
    const field = fields[filter.name];
    const options = (field) ? field.comparators : [];
    return <ListField value={filter.comparator} options={options} onChange={onChange} />
  }

}

class ContextualValue extends React.Component {
  render() {
    const { filter, fields, onChange } = this.props

    const field = fields[filter.name];

    if (!field) {
      return <InputTextField value={filter.value} onChange={onChange} />;
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


const InputTextField = ({value, onChange}) => {
  return <input type="text" className="form-control" onChange={onChange} value={value} />
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
    <select value={value} className="form-control" onChange={onChange}>
      { emptyOption }
      { optionTags }
    </select>
  );
}