import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import PaginationLinks, { PaginationLink, PageAnchor } from '../pagination_links';

describe('<PaginationLinks />', () => {

  let props;
  let shallowPaginationLinks;

  const paginationLinks = () => {
    if (shallowPaginationLinks) {
      return shallowPaginationLinks;
    }
    shallowPaginationLinks = shallow(<PaginationLinks {...props} />);
    return shallowPaginationLinks;
  }

  beforeEach(() => {
    props = {
      links: { first: undefined, prev: undefined, next: undefined, last: undefined },
      route: undefined,
      meta: undefined,
      location: undefined,
      onClick: undefined
    };

    shallowPaginationLinks = undefined;
  })

  describe('render', () => {

    beforeEach(() => {
      props = {
        route: true,
        links: { first: { page: 1 }, prev: { page: 1 }, next: { page: 3 }, last: { page: 10 } },
        location: '?foo=bar',
        onClick: sinon.fake()
      }
    })

    it('passes the correct props to each <PaginationLink />', () => {
      const shallowPaginationLinks = paginationLinks().find('PaginationLink');

      expect(shallowPaginationLinks).to.have.length(4);

      shallowPaginationLinks.forEach((paginationLink) => {
        expect(paginationLink.prop('route')).to.equal(props.route);
        expect(paginationLink.prop('onClick')).to.equal(props.onClick);
        expect(paginationLink.prop('location')).to.equal(props.location);
      })

      const first = shallowPaginationLinks.at(0);
      const prev  = shallowPaginationLinks.at(1);
      const next  = shallowPaginationLinks.at(2);
      const last  = shallowPaginationLinks.at(3);

      expect(first.prop('link')).to.equal(props.links.first);
      expect(first.prop('title')).to.equal('First');
      expect(prev.prop('link')).to.equal(props.links.prev);
      expect(prev.prop('title')).to.equal('Previous');
      expect(next.prop('link')).to.equal(props.links.next);
      expect(next.prop('title')).to.equal('Next');
      expect(last.prop('link')).to.equal(props.links.last);
      expect(last.prop('title')).to.equal('Last');
    })

    context('when page number is provided in meta', () => {

      beforeEach(() => {
        props.meta = { page: 100 }
      })

      it('displays what page is displayed', () => {
        expect(paginationLinks().find('span').text()).to.equal('Page 100');
      })

    })

  })
})

describe('<PaginationLink />', () => {

  let props;
  let shallowPaginationLink;

  const paginationLink = () => {
    if (shallowPaginationLink) {
      return shallowPaginationLink;
    }
    shallowPaginationLink = shallow(<PaginationLink {...props} />);
    return shallowPaginationLink;
  }

  beforeEach(() => {
    props = {
      route: undefined,
      link: undefined,
      onClick: undefined,
      location: undefined,
      title: undefined
    }

    shallowPaginationLink = undefined;
  })

  context('when route is true', () => {

    beforeEach(() => {
      props.route    = true;
      props.location = { pathname: '/sets/abcd-1234', search: '?sortBy=amount' };
      props.link     = { page: 2 };
      props.title    = 'Next';
    })

    it('renders a <PageLink />', () => {
      expect(paginationLink().find('PageLink')).to.have.length(1);
    })

    it('passes "to" to the <PageLink />', () => {
      expect(paginationLink().find('PageLink').prop('to'))
        .to.deep.equal({ pathname: props.location.pathname, search: '?sortBy=amount&page=2'})
    })

    it('passes "title" to the <PageLink />', () => {
      expect(paginationLink().find('PageLink').prop('title')).to.equal(props.title);
    })

  });

  context('when route is false', () => {

    beforeEach(() => {
      props.route    = false;
      props.location = { pathname: '/sets/abcd-1234' };
      props.title    = 'Prev';
      props.onClick  = sinon.fake();
    })

    it('renders a <PageAnchor />', () => {
      expect(paginationLink().find('PageAnchor')).to.have.length(1);
    })

    it('passes "title" to the <PageAnchor />', () => {
      expect(paginationLink().find('PageAnchor').prop('title')).to.equal(props.title);
    })

    it('passes "onClick" to the <PageAnchor />', () => {
      expect(paginationLink().find('PageAnchor').prop('onClick')).to.equal(props.onClick);
    })

    context('when link is not passed', () => {
      it('does not pass "search" to the <PageAnchor />', () => {
        expect(paginationLink().find('PageAnchor').prop('search')).to.be.undefined;
      })
    })

    context('when link is passed', () => {

      beforeEach(() => {
        props.link = { page: 2 };
      })

      it('passes "search" to the <PageAnchor />', () => {
        expect(paginationLink().find('PageAnchor').prop('search')).to.eql(`?page=${props.link.page}`)
      })
    })

  })

})

describe('<PageAnchor />', () => {

  let props;
  let shallowPageAnchor;

  const pageAnchor = () => {
    if (shallowPageAnchor) {
      return shallowPageAnchor;
    }
    shallowPageAnchor = shallow(<PageAnchor {...props} />);
    return shallowPageAnchor;
  }

  beforeEach(() => {
    props = {
      title: undefined,
      onClick: undefined,
      search: undefined,
      children: undefined
    }
    shallowPageAnchor = undefined;
  })

  context('when search is provided', () => {

    beforeEach(() => {
      props.title = 'Prev';
      props.onClick = sinon.fake();
      props.search = '?sortBy=amount&page=1';
    })

    it('calls onClick when clicked', () => {
      pageAnchor().simulate('click', { preventDefault: () => {} });
      expect(props.onClick.callCount).to.eql(1);
    })

    it('passes search to onClick when clicked', () => {
      pageAnchor().simulate('click', { preventDefault: () => {} });
      expect(props.onClick.lastArg).to.eql(props.search);
    })
  })

  context('when search is not provided', () => {

    beforeEach(() => {
      props.title = 'Prev';
      props.onClick = sinon.fake();
    })

    it('does not call onClick when clicked', () => {
      pageAnchor().simulate('click', { preventDefault: () => {} });
      expect(props.onClick.callCount).to.eql(0);
    })
  })
})