import React from 'react';
import {shallow} from 'enzyme';
import UserMessage from '../user_message';
import { createMockStore } from 'redux-test-utils';


describe('<UserMessage />', () => {
  const getContext = (status) => {
    let store = createMockStore(status);
    let context = { store };
    return { context }
  }
  context('when receiving a message', () => {
    it('shows the text', () => {
      const status = {
        browser: {
          userMessage: { msgType: 'danger', message: 'hi message' }
        }
      };
      const wrapper = shallow(<UserMessage></UserMessage>, getContext(status));
      expect(wrapper.dive().text()).to.contains('hi message');
    });
    it('uses the right css class', () =>{
      const status = {
        browser: {
          userMessage: { msgType: 'danger', message: 'hi message' }
        }
      };
      const wrapper = shallow(<UserMessage></UserMessage>, getContext(status));
      expect(wrapper.dive().find('.alert-danger').length).to.equal(1);
    })
  });

  context('when not receiving a message', () => {
    it('remains hidden', () => {
      const status = {
        browser: {
          userMessage: null
        }
      };
      const wrapper = shallow(<UserMessage></UserMessage>,  getContext(status));
      expect(wrapper.dive().find('.hidden').length).to.equal(1);
    });
  })
});