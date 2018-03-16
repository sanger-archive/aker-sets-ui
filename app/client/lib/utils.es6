export const debounce = (func, immediate) => {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    if (timeout) window.cancelAnimationFrame(timeout);
    timeout = window.requestAnimationFrame(later);
    if (immediate) func.apply(context, args);
  };
};

export const currentSearchQueryBuilder = (currentFilters) => {
 let filters = currentFilters.filter((filter) => {
    return (filter.name && !(filter.type == 'date' && filter.comparator && !filter.value));
  });
 return filters;
}
