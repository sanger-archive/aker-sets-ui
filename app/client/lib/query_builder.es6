const merge = (listA, listB) => {
  let b = new Set(listA);
  return listB.filter(x => b.has(x));
}

const objectToList = (mergedObject) => {
  let listObject = [];
  for (var key in mergedObject) {
    let obj = new Object();
    obj[key]=mergedObject[key];
    listObject.push(obj);
  }  
  return listObject;
}

export const reduceFilterList = (filterList) => {
  let mergedObject = filterList.reduce((memo, elem) => {
    if (Object.keys(elem).length > 1) {
      throw new Error('Incorrect format for filter object');
    }

    let key = Object.keys(elem)[0];
    if (!!memo[key]) {
      memo[key] = merge(memo[key], Object.values(elem)[0]);
    } else {
      memo[key] = Object.values(elem)[0];
    }
    return memo;
  }, new Object());

  return mergedObject;
}


const queryMaterialBuilder = (filters, materialFilters) => {
  if (typeof materialFilters == 'undefined') {
    materialFilters = [];
  }
  const mergedObject = reduceFilterList(materialFilters);

  let comparators = {
    'equals': '$in',
    'is': '$in',
    'is not': '$nin',
    'in': '$in',
    'not in': '$nin',
    'on': '$in',
    'before': '$lt',
    'after': '$gt'
  }

  var result = filters.reduce((memo, filter) => {

    const comparator = comparators[filter.comparator];
    const value = {};
    var filterValue = filter.value.trim();
    var filterName = filter.name;

    if (filter.type == 'date') {
      const date = new Date(filter.value)
      filterValue = date.toUTCString();
    }

    if (filter.type == 'boolean') {
      filterValue = (filter.value == "true");
    }

    // Handle set name and permissions in the merged list of UUIDs
    if (mergedObject && (filter.name == 'setMembership' ||
      filter.name == 'consumePermission' || filter.name == 'editPermission')) {
      const comparator = filter.comparator.split(' ').join('_')

      filterValue = mergedObject[comparator];
      filterName = '_id'
    }

// filterValue could be an array, eg for setMembership, so convert all filterValue's to arrays to help build query
    if (!Array.isArray(filterValue)){
      filterValue = [filterValue]
    }

    const comp = comparators[filter.comparator];
    if (memo[filterName]) {
      if (memo[filterName][comp]) {
        // If we ever want to rolback and change it to do an OR between values of fields instead of and AND, 
        // (like gender='male' OR gender='female') we would need to concat() the list of values
        // 
        //  memo[filterName][comp] = memo[filterName][comp].concat(filterValue)
        //
        // but if we want an AND we need to do an intersection of the values:
        // 
        //  memo[filterName][comp] = merge(memo[filterName][comp], filterValue);
        //
        memo[filterName][comp] = merge(memo[filterName][comp], filterValue);
      } else {
        memo[filterName][comp] = filterValue;
      }
    } else {
      value[comp] = filterValue;
      memo[filterName] = value;
    }

    return memo;
  }, {});

//Example result:
//{"gender":{"$in":["male"]},"phenotype":{"$nin":["a","b"]},"_id":{"$in":["123","234"],"$nin":["456"]}}

  return result;
}

export default queryMaterialBuilder;
