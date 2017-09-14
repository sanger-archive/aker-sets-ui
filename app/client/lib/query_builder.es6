const merge = (listA, listB) => {
  let b = new Set(listA);
  return listB.filter(x => b.has(x));
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

  let listObject = [];
  for (var key in mergedObject) {
    let obj = new Object();
    obj[key]=mergedObject[key];
    listObject.push(obj);
  }

  return listObject;
}

/*export const mergeMaterials = (stampMaterials, setMaterials) => {

}*/

const queryMaterialBuilder = (filters, setMaterials, stampMaterials) => {

  const mergedMaterials = mergeMaterials(setMaterials, stampMaterials);

  console.log(`queryMaterialBuilder: filters: ${filters}, mergedMaterials: ${mergedMaterials}`);

  /* TODO: This function needs refactoring due to the fact that the list(memo)
  within the reduce is re-created each time but is exactly the same since
  the mergedMaterials already contain the UUIDs of both the setMembership and
  consume/editPermission filters.
  */

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
    if (filter.name==""){
      return memo;
    }

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
    if (mergedMaterials && (filter.name == 'setMembership' ||
      filter.name == 'consumePermission' || filter.name == 'editPermission')) {
      const comparator = filter.comparator.split(' ').join('_')

      mergedMaterials.map((mergedMaterial) => {
        if (Object.keys(mergedMaterial).includes(comparator)) {
          filterValue = mergedMaterial[comparator]
          filterName = '_id'
        }
      })
    }

// filterValue could be an array, eg for setMembership, so convert all filterValue's to arrays to help build query
    if (!Array.isArray(filterValue)){
      filterValue = [filterValue]
    }

    const comp = comparators[filter.comparator];
    if (memo[filterName]) {
      if (memo[filterName][comp]) {
        filterValue.map((value)=>{
          memo[filterName][comp].push(value)
        })
      } else {
        memo[filterName][comp] = filterValue;
      }
    } else {
      value[comp] = filterValue;
      memo[filterName] = value;
    }

    // TODO: could be done somewhere else? better?
    delete(memo.consumePermission);
    delete(memo.editPermission);

    return memo;
  }, {});

//Example result:
//{"gender":{"$in":["male"]},"phenotype":{"$nin":["a","b"]},"_id":{"$in":["123","234"],"$nin":["456"]}}

  return result;
}

export default queryMaterialBuilder;
