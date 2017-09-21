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
    if (key==='in') {
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
    'on': '$eq',
    'before': '$lt',
    'after': '$gt'
  }

  let specialFilters = ['setMembership', 'consumePermission', 'editPermission'];

  if (mergedObject) {
    filters = filters.filter((filter) => !specialFilters.includes(filter.name));
  }

  var result = filters.map((filter) => {
    var filterValue = filter.value.trim();
    var filterName = filter.name;
    if (filter.type == 'date') {
      const date = new Date(filterValue);
      filterValue = date.toUTCString();
    }
    if (filter.type == 'boolean') {
      filterValue = (filter.value == "true");
    }
    const comp = comparators[filter.comparator];
    const operand = {};
    const desc = {};
    desc[comp] = filterValue;
    operand[filterName] = desc;
    return operand;
  });

  if (mergedObject) {
    if (mergedObject['in']) {
      result.push({'_id':{'$in':mergedObject['in']}});
    }
    if (mergedObject['not_in']) {
      result.push({'_id':{'$nin':mergedObject['not_in']}});
    }
  }

  return {"$and": result};

//Example result:
// {"$and":[{"gender":{"$eq":"male"}}, {"phenotype":{"$ne":"a"}}, {"phenotype":{"$ne":"b"}}], {"_id":{"$in":["123","234"]}}}
}

export default queryMaterialBuilder;
