import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from './font_awesome';

const exportButton = ({ set, extension, location, history, style }) => {
  const pathname = `/sets/${set.id}.${extension}`;
  const search = (location && location.search) ? location.search : '';
  const href = history.createHref({ pathname, search });

  return (
    <a href={ href } style={ style }>
      <FontAwesome icon="file-excel" size="lg" />
    </a>
  )
}

exportButton.propTypes = {
  set: PropTypes.shape({ id: PropTypes.string }).isRequired,
  extension: PropTypes.oneOf(['tsv', 'csv']),
  history: PropTypes.shape({ createHref: PropTypes.function }).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }),
  style: PropTypes.object
}

exportButton.defaultProps = {
  extension: 'tsv',
  style: {}
}

export default exportButton;