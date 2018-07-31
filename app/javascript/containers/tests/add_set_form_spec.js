import React from 'react';
import { shallow } from 'enzyme';
import { AddSetForm } from '../add_set_form';

describe('<AddSetForm />', () => {
  context('when displaying it', () => {
    it('shows the form', () => {
      const wrapper = shallow(<AddSetForm />);
      expect(wrapper.find('form')).to.have.length(1);
    });
  });
});
