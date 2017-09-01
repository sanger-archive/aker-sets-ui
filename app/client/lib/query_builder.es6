export const queryObjectBuilder = (filters) => {

  let comparators = {
    'is not': '$ne',
    'before': '$lt',
    'after': '$gt'
  }

  var result = filters.reduce((memo, filter) => {
    const comparator = comparators[filter.comparator];
    const value = {};
    let filterValue = filter.value;

    if (filter.type == 'date') {
      const date = new Date(filter.value)
      filterValue = date.toUTCString();
    }

    const equalComparators = ["is", "on", "equals"]

    if (equalComparators.includes(filter.comparator)) {
      memo[filter.name] = filterValue;
    } else {
      value[comparator] = filterValue;
      memo[filter.name] = value;
    }

    return memo;
  }, {});
  return result;
}

const queryBuilder = (filters) => {
  return `where=${JSON.stringify(queryObjectBuilder(filters))}`; 
};

export default queryBuilder;

