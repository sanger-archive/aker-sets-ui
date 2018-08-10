import React from 'react';
import { shallow } from 'enzyme';
import { AddSetForm } from '../add_set_form';
import { createSetOnly } from '../../actions/index'
import sinon from 'sinon';

describe('<AddSetForm />', () => {
  let props;
  let addSetFormWrapper;

  const addSetForm = () => {
    if (addSetFormWrapper) {
      return addSetFormWrapper;
    }
    addSetFormWrapper = shallow(<AddSetForm {...props} />);
    return addSetFormWrapper;
  }

  beforeEach(() => {
    props = {
      dispatch: undefined,
      history: undefined
    }

    addSetFormWrapper = undefined;
  })

  it('shows the form', () => {
    expect(addSetForm().find('form')).to.have.length(1);
  });

  describe('submission', () => {

    beforeEach(() => {
      const set = { set: { data: { id: 'abcd-1234' }}}
      props.dispatch = sinon.fake.resolves(set);
      props.history = { push: sinon.spy() };
    });

    context('when input is empty', () => {
      it('does not call dispatch', () => {
        addSetForm().find('button').simulate('click');
        expect(props.dispatch.callCount).to.equal(0)
      });
    });
  });

});
