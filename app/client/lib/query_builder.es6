export const queryMaterialBuilder = (filters, setMaterials) => {

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
    if (setMaterials && filter.name == 'setMembership'){
      const comparator = filter.comparator.split(' ').join('_')

      setMaterials.map((setMaterial) => {
        if (Object.keys(setMaterial).includes(comparator)){
          filterValue = setMaterial[comparator]
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
    return memo;
  }, {});

//Example result:
//{"gender":"male","phenotype":{"$ne":"a"},"donor_id":"z","_id":{"$in":["123","234"], "$nin":["456"]}}

  return result;
}

export default queryMaterialBuilder;
