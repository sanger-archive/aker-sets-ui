import React from 'react';
import { shallow, mount } from 'enzyme';
import store from '../../store.es6'
import {FilterRow} from '../filter_panel.es6'
import FilterPanel from '../filter_panel.es6'


describe('<FilterPanel />', () => {

  context('when there are no filters defined', () => {
    it('does not display the filters row', () => {
      const context = {
        store,
      };

      const wrapper = shallow(<FilterPanel filters={[]}></FilterPanel>, { context });
      expect(wrapper.dive().find(FilterRow).length).to.equals(0);
    })
  })

  context('when there are filters defined', () => {
    it('displays the filter row', () => {
      const context = {
        store,
      };

      const filters = [{id: 'an id', name: 'a filters name'}];
      const wrapper = shallow(<FilterPanel filters={filters}></FilterPanel>, { context });
      expect(wrapper.dive().find(FilterRow).length).to.equals(1);
    });
  })

  context('when interacting with filter panel', () => {
    beforeEach(function() { store.getState().search.filters = []});
    it('creates a new row when we click on the button to add new filter row', () => {
      const context = {
        store,
      };

      store.getState().search.filters = [];
      const wrapper = shallow(<FilterPanel {...store.getState().search} ></FilterPanel>, { context });
      expect(wrapper.dive().find(FilterRow).length).to.equals(0);
      wrapper.dive().find('button.add-filter-row').simulate('click');
      expect(store.getState().search.filters.length).to.equals(1);
    });

    it('removes a row when we click on the button to remove a filter row', () => {
      const context = {
        store,
      };

      const filters = [{id: 'an id', name: 'a filters name'}];
      store.getState().search.filters = filters;
      const wrapper = mount(<FilterPanel {...store.getState().search}></FilterPanel>, { context });
      expect(wrapper.find(FilterRow).length).to.equals(1);
      wrapper.find('button.remove-filter-row').simulate('click');
      expect(store.getState().search.filters.length).to.equals(0);
    });

    it('updates the stored current filters to the list of filters when we click on update search', () => {
      const context = {
        store,
      };

      const filters = [{id: 'an id', name: 'a filters name'}];
      store.getState().search.filters = filters;
      store.getState().search.current = [];
      expect(store.getState().search.current.length).to.equals(0);
      const wrapper = mount(<FilterPanel {...store.getState().search}></FilterPanel>, { context });
      wrapper.find('button.set-current-search').simulate('click');
      expect(store.getState().search.current.length).to.equals(filters.length);
    });

  })
});
