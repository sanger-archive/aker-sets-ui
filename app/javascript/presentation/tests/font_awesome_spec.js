import React from 'react';
import { shallow, mount } from 'enzyme';

import FontAwesome from '../font_awesome';

describe('<FontAwesome />', () => {

  context('when using the default params', () => {

    beforeEach(function() {
      this.wrapper = shallow(<FontAwesome />);
    })

    it('has the fa class', function() {
      expect(this.wrapper).to.have.className('fa');
    })

    it('has the fa-fw class', function() {
      expect(this.wrapper).to.have.className('fa-fw');
    })

  })

  context('when icon is passed in props', function() {

    beforeEach(function() {
      this.wrapper = shallow(<FontAwesome icon={'test'} />)
    })

    it('has the fa class', function() {
      expect(this.wrapper).to.have.className('fa');
    })

    it('has the fa-${icon} class', function() {
      expect(this.wrapper).to.have.className('fa-test')
    })

  })

  context('when size is passed in props', function() {

    beforeEach(function() {
      this.wrapper = shallow(<FontAwesome size={'2x'} />);
    })

    it('has the fa class', function() {
      expect(this.wrapper).to.have.className('fa');
    })

    it('has the class fa-${size}', function() {
      expect(this.wrapper).to.have.className('fa-2x')
    })
  })

  context('when fw is false', function() {

    beforeEach(function() {
      this.wrapper = shallow(<FontAwesome fw={false} />)
    })

    it('does not have the fa-fw class', function() {
      expect(this.wrapper).to.not.have.className('fa-fw')
    })
  })

  describe('onClick', function() {

    context('when the icon is clicked', function() {

      beforeEach(function() {
        this.spy = sinon.spy();
        this.wrapper = mount(<FontAwesome onClick={this.spy} />)
        this.wrapper.simulate('click')
      })

      it('triggers the onClick prop function', function() {
        expect(this.spy).to.have.been.called
      })

    })
  })
})