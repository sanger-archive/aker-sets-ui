import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import {BiomaterialTableRow, BiomaterialTable} from '../biomaterial_table'

describe('<BiomaterialTableRow />', () => {
  context('when rendering the row', () => {
    it('renders the row', () => {
      let wrapper = shallow(<BiomaterialTableRow />);
      expect(wrapper.find('tr')).to.have.length(1);
    });
    it('should render an icon clickable to allow you remove the material if removable is set to true', () => {
      let wrapper = shallow(<BiomaterialTableRow removeable={true} />);
      expect(wrapper.find('FontAwesome')).to.have.length(1);
    });

    context('when receiving a list of selected materials', () => {
      it('adds the info CSS class to the material if its id is inside the selected list ', () => {
        let biomaterial = {id: 1, gender: 'unknown'};
        let biomaterial2 = {id: 2, gender: 'unknown'};

        let wrapper = shallow(<BiomaterialTableRow selected={[biomaterial]} biomaterial={biomaterial} />);
        expect(wrapper.find('tr.info')).to.have.length(1);
      });
      it('does not add the info CSS class to the material if its id is not inside the selected list ', () => {
        let biomaterial = {id: 1, gender: 'unknown'};
        let biomaterial2 = {id: 2, gender: 'unknown'};

        let wrapper = shallow(<BiomaterialTableRow selected={[biomaterial]} biomaterial={biomaterial2} />);
        expect(wrapper.find('tr.info')).to.have.length(0);
      });

    });
  });
});


describe('<BiomaterialTable />', () => {
  context('when rendering the table', () => {
    it('renders a row for each material', () => {
      const biomaterials = [{id: 1, gender: 'unknown'}, {id: 2, gender: 'unknown'}];
      let wrapper = shallow(<BiomaterialTable biomaterials={biomaterials} />)
      expect(wrapper.find('BiomaterialTableRow')).to.have.length(biomaterials.length);
    });
    context('when providing a hash of materials information', () => {
      it('displays the materials information provided', () => {
        const biomaterials = [{id: 1, gender: 'female'}, {id: 2, gender: 'male'}, {id: 3, gender: 'unknown'}];
        let wrapper = shallow(<BiomaterialTable biomaterials={biomaterials} />)
        expect(wrapper.find('BiomaterialTableRow').at(0).props().biomaterial.gender).to.equal('female');
        expect(wrapper.find('BiomaterialTableRow').at(1).props().biomaterial.gender).to.equal('male');
        expect(wrapper.find('BiomaterialTableRow').at(2).props().biomaterial.gender).to.equal('unknown');
      });
    })
  });
});
