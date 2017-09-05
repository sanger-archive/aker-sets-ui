import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';


import StamperPanel from '../stamper_panel.es6';

const stamps = (num) => {
  return [...Array(num).keys()].map((id) => { return {id, attributes: {name: "hi"}}});
}

describe('<StamperPanel />', () => {
  beforeEach(function() {
    this.NUM_STAMPS = 50;
    this.stamps = stamps(this.NUM_STAMPS);
    this.STATUS = { 
      stamps: this.stamps,
      shownItems: true, 
      status: 'running', 
      onStampClick: sinon.spy(), 
      onUnstampClick: sinon.spy(), 
      onChangeSelectedStamp: sinon.spy()
    };
  })

  context('when shownItems is set to false', () => {
    beforeEach(function() { this.STATUS.shownItems = false});

    it('displays an empty div', function() {
      this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
      expect(this.wrapper.contains(<div></div>)).to.equal(true);
    });
  })

  context('when shownItems is set to true', () => {

    context('when status is init', () => {
      beforeEach(function() { this.STATUS.status = 'init'});
      it('displays an initialization message', function() {
        this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
        expect(this.wrapper.text()).to.contains('Initializing stamps');
      })
    });

    context('when status is fetching', () => {
      beforeEach(function() { this.STATUS.status = 'fetching'});
      it('displays an fetching message', function() {
        this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
        expect(this.wrapper.text()).to.contains('Loading stamps');        
      });
    });

    context('in any other case', () => {
      beforeEach(function() { this.STATUS.status = 'running'});

      it('displays all the stamps inside a select', function() {
        this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
        expect(this.wrapper.find('option').length).to.equal(this.NUM_STAMPS);
      });

      context('when selectedStamp is not provided', function() {
        it('selects the first stamp', function() {
          this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
          expect(this.wrapper.find('select').prop('defaultValue')).to.equal(this.STATUS.stamps[0].id);
        });  
      });
      context('when selectedStamp is provided', function() {
        it('selects the stamp provided as selectedStamp', function() {
          const mySelection = this.STATUS.stamps[3];
          this.STATUS.selectedStamp = mySelection;
          this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
          expect(this.wrapper.find('select').prop('defaultValue')).to.equal(mySelection.id);
        });
      });

      context('when interacting with the component', function() {

        it('calls apply handler when clicking apply button', function() {
          this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
          this.wrapper.find('button[children="Apply"]').simulate('click');
          expect(this.STATUS.onStampClick).to.have.property('callCount', 1);
        });

        it('calls unapply handler when clicking unapply button', function() {
          this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
          this.wrapper.find('button[children="Unapply"]').simulate('click');
          expect(this.STATUS.onUnstampClick).to.have.property('callCount', 1);
        });

        it('calls on change handler when changing the select option', function() {
          this.wrapper = shallow(<StamperPanel {...this.STATUS} />);
          this.wrapper.find('select').simulate('change');
          expect(this.STATUS.onChangeSelectedStamp).to.have.property('callCount', 1);        
        });

      });

    });
  });
})