import { RECEIVE_MATERIAL_SCHEMA, UPDATE_FILTER_NAME, UPDATE_FILTER_COMPARATOR, UPDATE_FILTER_VALUE, REMOVE_FILTER, ADD_FILTER, SET_CURRENT_SEARCH, RECEIVE_SEARCH_RESULTS } from '../actions/index.es6';

const search = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_MATERIAL_SCHEMA:
      const comparators = {
        list: ['is', 'is not'],
        date: ['before', 'after', 'on'],
        string: ['is', 'is not'],
        boolean: ['equals']
      };
      const allowedTypes = ['string', 'boolean'];
      const properties = action.schema.properties;

      let fields = Object.keys(properties).reduce((memo, name) => {

        const property = properties[name];
        const type = property.type;

        // We don't want to include certain properties
        if (!allowedTypes.includes(type)) {
          return memo;
        }
        if (!property.searchable) {
          return memo;
        }

        let field = memo[name] = {};

        // String can actually be a date or list
        if (type == 'string') {

          // If allowed key exists, type is list
          if (property.hasOwnProperty('allowed')) {
            field['type'] = 'list';
            field['comparators'] = comparators['list'];
            field['allowed'] = property['allowed'];

          // If format key exists, and value is date, type is date
          } else if (property.hasOwnProperty('format') && property.format == 'date') {
            field['type'] = 'date';
            field['comparators'] = comparators['date'];

          // Just a regular type string
          } else {
            field['type'] = 'string';
            field['comparators'] = comparators['string'];
          }
        } else if (type == 'boolean') {
          field['type'] = 'boolean';
          field['comparators'] = comparators['boolean'];
          field['allowed'] = ['true', 'false'];
        }

        return memo;
      }, { "_id": { "type": "string", "comparators": comparators['string'] }});

      return Object.assign({}, state, { fields: fields });

    case UPDATE_FILTER_NAME:
      newState = state.filters.map((filter, index) => {
        if (index != action.index) {
          return filter;
        }
        // If the type changed, reset the value
        let field = state.fields[action.value];

        if (field && field.allowed) {
          filter.value = field.allowed[0];
        } else {
          filter.value = '';
        }

        filter.name = action.value;
        filter.type = field.type;
        filter.comparator = state.fields[filter.name].comparators[0];

        return filter;
      });
      return Object.assign({}, state, { filters: newState });

    case UPDATE_FILTER_COMPARATOR:
       newState = state.filters.map((filter, index) => {
        if (index != action.index) {
          return filter;
        }
        filter.comparator = action.value;
        return filter
      });
      return Object.assign({}, state, { filters: newState });

    case UPDATE_FILTER_VALUE:
      newState = state.filters.map((filter, index) => {
        if (index != action.index) {
          return filter;
        }
        filter.value = action.value;
        return filter
      });
      return Object.assign({}, state, { filters: newState });

    case REMOVE_FILTER:
      newState = state.filters.slice();
      newState.splice(action.index, 1);
      return Object.assign({}, state, { filters: newState });

    case ADD_FILTER:
      newState = state.filters.slice();
      newState.push({ id: Date.now(), name: '', comparator: '', value: ''});
      return Object.assign({}, state, { filters: newState });

    case SET_CURRENT_SEARCH:
      newState = state.filters.map((filter) => {
        return Object.assign({}, filter);
      });
      return Object.assign({}, state, { current: newState });

    case RECEIVE_SEARCH_RESULTS:
      newState = action.results;
      const links = action.links;
      return Object.assign({}, state, { results: newState, links: links });

    default:
      return state;
  }
}

export default search;