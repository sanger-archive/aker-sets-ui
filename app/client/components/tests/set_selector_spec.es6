import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowWithStore} from 'enzyme-redux'
import sinon from 'sinon';
import store from '../../store.es6'
import {SetSelector, SelectDisablingSurroundingButtons} from '../set_selector.es6'
import fetch from 'isomorphic-fetch'
import fetchMock from 'fetch-mock'
import { createMockStore } from 'redux-test-utils';

function simulateKeyPresses(characters) {
  let input = this.find('input')

  for(let i = 0; i < characters.length; i++) {
    input.simulate('keyPress', {
      which: characters.charCodeAt(i),
      key: characters[i],
      keyCode: characters.charCodeAt(i)
    });
    input.simulate('change')
  }
}

function getContext() {
  return {
    context: {
      store: createMockStore(
        {
          userEmail: 'test@sanger.ac.uk'
        })
    }
  }
}

describe('<SelectDisablingSurroundingButtons />', () => {
  it('displays a SelectDisablingSurroundingButtons inside', () => {
    const wrapper = shallow(<SelectDisablingSurroundingButtons />, getContext());
    expect(wrapper.dive().find('SetSelector').length).to.eq(1)
  });
})

describe('<SetSelector />', () => {
  it('displays a Select inside', () => {
    function mockupMethod() {}

    const wrapper = mount(<SetSelector onChange={mockupMethod}></SetSelector>);
    expect(wrapper.find('Select').length).to.eq(1)
  });

  context('when writing some characters', () => {
    it('performs an ajax call', () => {
      let mockupMethod = sinon.spy()
      fetchMock.reset()
      fetchMock.restore()

      fetchMock.get('*', { data: [] })

      const wrapper = mount(<SetSelector onChange={mockupMethod}></SetSelector>);

      simulateKeyPresses.call(wrapper, 'abc')
      expect(mockupMethod).to.have.been.called
    })
  })

  context('convertOpts()', () => {
    it('returns null when no json is passed as argument and there is no selected option', () => {
      function mockupMethod() {}
      const wrapper = mount(<SetSelector onChange={mockupMethod}></SetSelector>)

      expect(wrapper.instance().convertOpts({})[0]).to.equal(null)
    })
    it('returns selected option when no json is passed as argument', () => {
      function mockupMethod() {}
      const wrapper = mount(<SetSelector onChange={mockupMethod}></SetSelector>)
      wrapper.instance().setState({selectedOption: 'some option'})
      expect(wrapper.instance().convertOpts({})[0]).to.equal('some option')
    })
    it('returns an empty list when no options is obtained', () => {
      function mockupMethod() {}
      const wrapper = mount(<SetSelector onChange={mockupMethod}></SetSelector>);
      const opts = wrapper.instance().convertOpts({data: []})

      expect(opts.length).to.equal(0)
    })

    it('returns the right options from a json', () => {
      function mockupMethod() {}
      const wrapper = mount(<SetSelector onChange={mockupMethod}></SetSelector>);
      const opts = wrapper.instance().convertOpts({data: [{id: 'some id', attributes: {name: 'a set'}}]})

      expect(opts.length).to.equal(1)
      expect(opts[0].label).to.equal('a set')
      expect(opts[0].value).to.equal('some id')
    })
  })


});
