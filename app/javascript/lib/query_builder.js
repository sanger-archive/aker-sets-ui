const intersect = (listA, listB) => {
  let a = new Set(listA);
  return listB.filter(x => a.has(x));
}

const union = (listA, listB) => {
  return Array.from(new Set(listA.concat(listB)));
}

const difference = (listA, listB) => {
  let b = new Set(listB);
  return listA.filter(x => !b.has(x));
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

  var ins = null;
  var notins = null;

  const len = filterList.length;

  for (var i = 0; i < len; ++i) {
    var elem = filterList[i];
    var keys = Object.keys(elem);
    if (keys.length > 1) {
      throw new Error('Incorrect format for filter object');
    }
    let key = keys[0];
    if (key==='is' || key==='granted to user'|| key==='granted to group') {
      if (ins===null) {
        ins = elem[key];
      } else {
        ins = intersect(ins, elem[key]);
      }
    } else {
      if (notins===null) {
        notins = elem[key];
      } else {
        notins = union(notins, elem[key]);
      }
    }
    if (ins!==null && notins!==null) {
      ins = difference(ins, notins);
      notins = null;
    }
  }
  return { 'in': ins, 'not_in': notins };
}

const queryMaterialBuilder = (filters, materialFilters) => {
  if (typeof materialFilters == 'undefined') {
    materialFilters = [];
  }
  const mergedObject = reduceFilterList(materialFilters);

  let comparators = {
    'equals': '$eq',
    'is': '$eq',
    'is not': '$ne',
    'in': '$in',
    'not in': '$nin',
    'on': '$on',
    'before': '$lt',
    'after': '$gte',
    'more than': '$gt',
    'less than': '$lt',
    'no more than': '$lte',
    'no less than': '$gte'
  }

  const specialFilters = ['setMembership', 'consumePermission', 'editPermission'];
  const emailAppend    = ['owner_id', 'submitter_id'];

  var results = filters.reduce((memo, filter) => {
    var filterValue = filter.value.trim();
    var filterName = filter.name;
    if (specialFilters.includes(filterName)) {
      return memo;
    }
    const comp = comparators[filter.comparator];
    if (filter.type == 'date') {
      const date = new Date(filterValue);
      date.setUTCHours(0,0,0,0); // midnight on this day

      if (comp=='$on') {
        const afterFilter = {};
        afterFilter[filterName] = { '$gte': date.toUTCString() };
        memo.push(afterFilter);
        date.setUTCHours(24,0,0,0); // midnight the next day
        const beforeFilter = {};
        beforeFilter[filterName] = { '$lt': date.toUTCString() };
        memo.push(beforeFilter);
        return memo;
      }

      filterValue = date.toUTCString();
    }
    if (filter.type == 'boolean') {
      filterValue = (filter.value == "true");
    }
    if (emailAppend.includes(filter.name) && !filter.value.includes('@')) {
      filterValue += '@sanger.ac.uk';
    }
    if (filter.type == 'float') {
      filterValue = parseFloat(filter.value);
    }

    const fieldPredicate = {};
    const predicate = {};
    predicate[comp] = filterValue;
    fieldPredicate[filterName] = predicate;
    memo.push(fieldPredicate);
    return memo;
  }, []);

  if (mergedObject) {
    if (mergedObject['in']) {
      results.push({'_id':{'$in':mergedObject['in']}});
    }
    if (mergedObject['not_in']) {
      results.push({'_id':{'$nin':mergedObject['not_in']}});
    }
  }
  if (results.length == 0) {
    throw new Error('Please select a filter to search');
  }
  return {"$and": results};

//Example result:
// {"$and":[{"gender":{"$eq":"male"}}, {"phenotype":{"$ne":"a"}}, {"phenotype":{"$ne":"b"}}], {"_id":{"$in":["123","234"]}}}
}

export default queryMaterialBuilder;
