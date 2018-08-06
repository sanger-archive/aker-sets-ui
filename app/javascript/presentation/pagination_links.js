import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import qs from 'qs';

const PaginationLinks = (props) => {
  const { links, route, meta, location, onClick } = props;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="col-md-2 pull-left">
         <span className="badge badge-secondary">
           { meta && meta.page && `Page ${meta.page}` }
         </span></div>
        <nav aria-label="Page navigation" className="pull-right">
          <ul className="pagination">
            <PaginationLink route={route} link={links.first} onClick={onClick} location={location} title='First' key='First' />
            <PaginationLink route={route} link={links.prev} onClick={onClick} location={location} title='Previous' key='Previous' />
            <PaginationLink route={route} link={links.next} onClick={onClick} location={location} title='Next' key='Next' />
            <PaginationLink route={route} link={links.last} onClick={onClick} location={location} title='Last' key='Last' />
          </ul>
        </nav>
      </div>
    </div>
  );
}

PaginationLinks.defaultProps = {
  location: { search: '' }
}

export default PaginationLinks;

export const PaginationLink = ({ route, link, onClick, location, title }) => {
  const pathname = location.pathname;
  let LinkOrA;
  let search;
  let linkProps;

  if (link) {
    if (location && location.search) {
      search = qs.stringify(
        Object.assign({}, qs.parse(location.search, { ignoreQueryPrefix: true }), { page: link.page }),
        { addQueryPrefix: true });
    } else {
      search = `?page=${link.page}`;
    }
  }

  const to = { pathname, search };

  if (route) {
    LinkOrA = PageLink;
    linkProps = { to, title }
  } else {
    LinkOrA = PageAnchor;
    linkProps = { title, onClick, search };
  }

  return (
    <li className={!link ? 'disabled' : undefined } >
      <LinkOrA { ...linkProps }>
        <span aria-hidden="true">{title}</span>
      </LinkOrA>
    </li>
  );
}

PaginationLink.propTypes = {
  route: PropTypes.bool,
  link: PropTypes.shape({ page: PropTypes.number }),
  onClick: PropTypes.func,
  location: PropTypes.shape({ pathname: PropTypes.string, search: PropTypes.string }).isRequired,
  title: PropTypes.string.isRequired
}

const PageLink = ({ to, title, children }) => {
  return (
    <Link to={ to } aria-label={title}>
      { children }
    </Link>
  )
}

export const PageAnchor = ({ title, onClick, search, children }) => {
  return (
    <a href='#' aria-label={title} onClick={ (e) => {
        e.preventDefault();
        if (!!search) onClick(search);
      }
    }>
      { children }
    </a>
  );
}
