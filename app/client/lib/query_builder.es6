const queryBuilder = (filters) => {

  let comparators = {
    'is': '$eq',
    'is not': '$ne',
    'before': '$lt',
    'after': '$gt',
    'on': '$eq',
    'equals': '$eq'
  }

  var result = filters.reduce((memo, filter) => {
    const comparator = comparators[filter.comparator];
    const value = {};
    let filterValue = filter.value;

    if (filter.type == 'date') {
      const date = new Date(filter.value)
      filterValue = date.toUTCString();
    }
    value[comparator] = filterValue;
    memo[filter.name] = value;

    return memo;
  }, {});

  return `where=${JSON.stringify(result)}`;
}

export default queryBuilder;
