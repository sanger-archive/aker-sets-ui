import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from './font_awesome';

const exportButton = ({ set, extension, location, style }) => {
  let href = `/sets/${set.id}.${extension}`;

  if (location && location.search) {
    href = `${href}${location.search}`;
  }

  return (
    <a href={ href } style={ style }>
      <FontAwesome icon="file-excel" size="lg" />
    </a>
  )
}

exportButton.propTypes = {
  set: PropTypes.shape({ id: PropTypes.string }).isRequired,
  extension: PropTypes.oneOf(['tsv', 'csv']),
  location: PropTypes.shape({ search: PropTypes.string }),
  style: PropTypes.object
}

exportButton.defaultProps = {
  extension: 'tsv',
  style: {}
}

export default exportButton;