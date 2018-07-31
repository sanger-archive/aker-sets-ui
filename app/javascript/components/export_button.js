import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from './font_awesome';
import { Link } from 'react-router-dom';

const exportButton = ({ set, extension, location, style }) => {
  let to = `/sets/${set.id}.${extension}`;

  if (location && location.search) {
    to = `${to}${location.search}`;
  }

  return (
    <Link to={ to } style={ style }>
      <FontAwesome icon="file-excel" size="lg" />
    </Link>
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