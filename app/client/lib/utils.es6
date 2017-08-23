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
   let filters = currentFilters.filter((filter) => {
      return (filter.name && !(filter.type == 'date' && filter.comparator && !filter.value));
    });
   return filters;
}