import React from 'react';
import { shallow, mount } from 'enzyme';

import Program from '../../../app/client/components/program.es6';

describe('<Program />', function() {

  before(function() {
    this.stub = sinon.stub($, 'ajax');
  })

  after(function() {
    this.stub.restore();
  })

  describe('initialisation', function() {

    before(function() {
      this.wrapper = mount(<Program id={'1'} type={'program'} />)
    })

    it('sets its state', function() {
      expect(this.wrapper.state()).to.deep.equal({ name: '' })
    })

  })

  describe('#render', function() {

    before(function() {
      this.wrapper = mount(<Program id={'1'} type={'programs'} />)
    })

    context('when passed a `programs` type', function() {

      before(function() {
        this.wrapper = mount(<Program id={'1'} type={'programs'} />)
      })

      it('renders the `create collection` form', function() {
        expect(this.wrapper.find('input.form-control')).to.have.length(1)
      })
    })

  })

  describe('creating collections', function() {

    beforeEach(function() {
      this.stub = sinon.stub(Program.prototype, '_createCollection')
      this.wrapper = mount(<Program id={'1'} type={'programs'} />)
    })

    afterEach(function() {
      this.stub.restore();
    })

    context('when form has not been filled in', function() {

      it('does not try to create a new collection', function() {
        this.wrapper.find('button').simulate('click')
        expect(this.stub).to.not.have.been.called
      })

    })

    context('when form has been filled in', function() {

      beforeEach(function() {
        this.wrapper.find('input').get(0).value = 'new collection';
      })

      it('creates a new collection on click', function() {
        this.wrapper.find('button').simulate('click');
        expect(this.stub).to.have.been.calledWith('new collection')
      })

      it('creates a new collection on keyUp of the enter key', function() {
        const ENTER_KEY = 13;
        this.wrapper.find('input').simulate('keyUp', { keyCode: ENTER_KEY })
        expect(this.stub).to.have.been.calledWith('new collection')
      })

    })

  })

})