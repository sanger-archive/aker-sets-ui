export const queryMaterialBuilder = (filters, setMaterials) => {

  let comparators = {
    'is not': '$ne',
    'before': '$lt',
    'after': '$gt',
    'in': '$in',
    'not in': '$nin'
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
    if (setMaterials && filter.name == 'setMembership'){
      const comparator = filter.comparator.split(' ').join('_')

      setMaterials.map((setMaterial) => {
        if (Object.keys(setMaterial).includes(comparator)){
          filterValue = setMaterial[comparator]
          filterName = '_id'
        }
      })
    }

    const equalComparators = ["is", "on", "equals"]

    if (equalComparators.includes(filter.comparator)) {
      memo[filterName] = filterValue;
    } else {
      value[comparator] = filterValue;
      memo[filterName] = value;
    }
    return memo;
  }, {});

//Example result:
//{"gender":"male","phenotype":{"$ne":"a"},"donor_id":"z","_id":{"$in":["7460454b-ec70-40a3-b883-faed34be3dba","2f330521-9d43-4ea8-8eb2-b97c82a1567a"]}}

  return result;
}

export default queryMaterialBuilder;
