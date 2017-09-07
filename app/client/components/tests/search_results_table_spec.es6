import React from 'react';
import { shallow, mount } from 'enzyme';
import store from '../../store.es6'

import ButtonsPanel from '../buttons_panel.es6'
import SearchResultsTable from '../search_results_table.es6'

describe('<SearchResultsTable />', () => {
  context('when there are no items defined', () => {
    it('displays the results table with only the headers', () => {
      const context = {
        store,
      };
      const wrapper = shallow(<SearchResultsTable current={[]} headings={['heading1', 'heading2']} items={[]} links={[]} sets={[]}></SearchResultsTable>, { context });
      expect(wrapper.dive().find('th').length).to.equals(2);
    });
  });

  context('when there are items defined', () => {
    const context = {
        store,
    };

    it('displays the results table with items in the rows', () => {
      const items = [{heading1: 'result1', heading2: 'result2'}];
      const wrapper = shallow(<SearchResultsTable current={[]} headings={['heading1', 'heading2']} items={items} links={[]} sets={[]}></SearchResultsTable>, { context });
      expect(wrapper.dive().find('tr').length).to.equals(1);
    });

    it('displays the buttons panel', () => {
      const items = [{heading1: 'result1', heading2: 'result2'}];
      const wrapper = shallow(<SearchResultsTable current={[]} headings={['heading1', 'heading2']} items={items} links={[]} sets={[]}></SearchResultsTable>, { context });
      expect(wrapper.dive().find(ButtonsPanel).length).to.equals(1);
    });
  })

});
