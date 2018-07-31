import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from './font_awesome';
import { Link } from 'react-router-dom';

const exportButton = ({ set, extension, history, style }) => {
  const pathname = `/sets/${set.id}.${extension}`;
  const search = history.location.search;
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
  history: PropTypes.shape({ location: PropTypes.object, createHref: PropTypes.function }).isRequired,
  style: PropTypes.object
}

exportButton.defaultProps = {
  extension: 'tsv',
  style: {}
}

export default exportButton;