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

export const validateNewSetName = (setName) => {
  if (setName.match(/^\s*manifest\s/i)) {
    return "Set names of the form \"Manifest ...\" are reserved for use by Aker.";
  }
  if (setName.match(/^\s*work\s+order\s/i)) {
    return "Set names of the form \"Work order ...\" are reserved for use by Aker.";
  }
  return null;
}
