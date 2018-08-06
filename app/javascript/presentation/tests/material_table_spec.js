import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import {MaterialTableRow, MaterialTable} from '../material_table'

describe('<MaterialTableRow />', () => {
  context('when rendering the row', () => {
    it('renders the row', () => {
      let wrapper = shallow(<MaterialTableRow />);
      expect(wrapper.find('tr')).to.have.length(1);
    });
    it('should render an icon clickable to allow you remove the material if removable is set to true', () => {
      let wrapper = shallow(<MaterialTableRow removeable={true} />);
      expect(wrapper.find('FontAwesome')).to.have.length(1);
    });

    context('when receiving a list of selected materials', () => {
      it('adds the info CSS class to the material if its id is inside the selected list ', () => {
        let material = {_id: 1, gender: 'unknown'};
        let material2 = {_id: 2, gender: 'unknown'};

        let wrapper = shallow(<MaterialTableRow selected={[material]} material={material} />);
        expect(wrapper.find('tr.info')).to.have.length(1);
      });
      it('does not add the info CSS class to the material if its id is not inside the selected list ', () => {
        let material = {_id: 1, gender: 'unknown'};
        let material2 = {_id: 2, gender: 'unknown'};

        let wrapper = shallow(<MaterialTableRow selected={[material]} material={material2} />);
        expect(wrapper.find('tr.info')).to.have.length(0);
      });

    });
  });
});


describe('<MaterialTable />', () => {
  context('when rendering the table', () => {
    it('renders a row for each material', () => {
      const materials = [{_id: 1, gender: 'unknown'}, {_id: 2, gender: 'unknown'}];
      let wrapper = shallow(<MaterialTable materials={materials} />)
      expect(wrapper.find('MaterialTableRow')).to.have.length(materials.length);
    });
    context('when providing a hash of materials information', () => {
      it('displays the materials information provided', () => {
        const materials = [{_id: 1, gender: 'female'}, {_id: 2, gender: 'male'}, {_id: 3, gender: 'unknown'}];
        let wrapper = shallow(<MaterialTable materials={materials} />)
        expect(wrapper.find('MaterialTableRow').at(0).props().material.gender).to.equal('female');
        expect(wrapper.find('MaterialTableRow').at(1).props().material.gender).to.equal('male');
        expect(wrapper.find('MaterialTableRow').at(2).props().material.gender).to.equal('unknown');
      });
    })
  });
});
