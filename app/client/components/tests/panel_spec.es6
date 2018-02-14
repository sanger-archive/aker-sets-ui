import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import {Panel, Heading, Body, Footer} from '../panel.es6'

describe('<Panel />', () => {
  context('when rendering', () => {
    it('renders the panel', () => {
      let wrapper = shallow(<Panel />);
      expect(wrapper.find('.panel')).to.have.length(1);
    });
  });
});

describe('<Heading />', () => {
  context('when rendering', () => {
    it('renders the heading', () => {
      let wrapper = shallow(<Heading />);
      expect(wrapper.find('.panel-heading')).to.have.length(1);
    });
    context('when a title is provided', () => {
      it('renders the title', () => {
        let wrapper = shallow(<Heading title='my title' />);
        expect(wrapper.text()).to.equal('my title');
      });
    })
  });
});

describe('<Body />', () => {
  context('when rendering', () => {
    it('renders the body', () => {
      let wrapper = shallow(<Body />);
      expect(wrapper.find('.panel-body')).to.have.length(1);
    });
  }); 
});

describe('<Footer />', () => {
  context('when rendering', () => {
    it('renders the footer', () => {
      let wrapper = shallow(<Footer />);
      expect(wrapper.find('.panel-footer')).to.have.length(1);
    });
  });  
});
