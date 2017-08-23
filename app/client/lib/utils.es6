export const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const filterQuery = (currentFilters) => {
  debugger
   let filters = currentFilters.filter((filter) => {
      if (filter.name) {
        if (filter.type == 'date' && filter.comparator && !filter.value) {
          return false;
        }
        return true;
      }
      return false;
    });
   return filters;
}