import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { MaterialTableRow, MaterialTable } from '../material_table'

describe('<MaterialTableRow />', () => {

  let props;
  let shallowMaterialTableRow;

  const materialTableRow = () => {
    if (shallowMaterialTableRow) {
      return shallowMaterialTableRow;
    }
    shallowMaterialTableRow = shallow(<MaterialTableRow {...props} />);
    return shallowMaterialTableRow;
  };

  beforeEach(() => {
    props = {
      material: undefined,
      onClick: undefined,
      removeable: undefined,
      onRemove: undefined,
      index: undefined,
      selected: undefined
    }

    shallowMaterialTableRow = undefined;
  })

  describe('rendering', () => {
    beforeEach(() => {
      props.material = {
        _id: 1,
        supplier_name: 'Beaky',
        concentration: 2,
        amount: 10,
        volume: 5,
        tissue_type: 'DNA'
      }
    })

    it('renders the row', () => {
      expect(materialTableRow().find('tr')).to.have.length(1);
    });

    it('renders _id, supplier_name, concentration, amount, volume, and tissue type', () => {
      expect(materialTableRow().text()).to.include(props.material._id)
      expect(materialTableRow().text()).to.include(props.material.supplier_name)
      expect(materialTableRow().text()).to.include(props.material.concentration)
      expect(materialTableRow().text()).to.include(props.material.amount)
      expect(materialTableRow().text()).to.include(props.material.volume)
      expect(materialTableRow().text()).to.include(props.material.tissue_type)
    })
  });

  context('when removeable is true', () => {
    beforeEach(() => {
      props.removeable = true;
    })

    it('renders a clickable icon to allow you remove the material', () => {
      expect(materialTableRow().find('FontAwesome')).to.have.length(1);
    });
  });

  describe('selected materials', () => {

    context('when a material is in the selected list', () => {
      beforeEach(() => {
        const material = {_id: 1, gender: 'unknown'};
        props.selected = [material];
        props.material = material;
      })

      it('adds the "info" CSS class to the material', () => {
        expect(materialTableRow().hasClass('info')).to.equal(true);
      });
    });

    context('when a material is not in the selected list', () => {
      beforeEach(() => {
        const material = {_id: 1, gender: 'unknown'};
        props.selected = [];
        props.material = material;
      });

      it('does not add the "info" CSS class to the material', () => {
        expect(materialTableRow().hasClass('info')).to.equal(false);
      });
    })
  });

  describe('onClick', () => {

    beforeEach(() => {
      props.material = { _id: 1 };
      props.index = 1;
      props.onClick = sinon.spy();
    })

    it('receives the material, index, and event', () => {
      const e = { fake: 'event' }
      materialTableRow().simulate('click', e);
      expect(props.onClick.calledOnceWith(props.material, props.index, e)).to.equal(true);
    })

  })

});


describe('<MaterialTable />', () => {

  let props;
  let shallowMaterialTable;

  const materialTable = () => {
    if (shallowMaterialTable) {
      return shallowMaterialTable;
    }
    shallowMaterialTable = shallow(<MaterialTable {...props} />);
    return shallowMaterialTable;
  }

  beforeEach(() => {
    props = {
      decorators: undefined,
      materials: undefined
    }

    shallowMaterialTable = undefined;
  });

  context('when rendering the table', () => {

    beforeEach(() => {
      props.materials = [{_id: 1, gender: 'unknown'}, {_id: 2, gender: 'unknown'}];
    })

    it('renders a row for each material', () => {
      expect(materialTable().find('MaterialTableRow')).to.have.length(props.materials.length);
    });

    it('has columns ID, Supplier Name, Amount, Volume, and Tissue Type', () => {
      expect(materialTable().text()).to.include('ID');
      expect(materialTable().text()).to.include('Supplier Name');
      expect(materialTable().text()).to.include('Concentration');
      expect(materialTable().text()).to.include('Amount');
      expect(materialTable().text()).to.include('Volume');
      expect(materialTable().text()).to.include('Tissue Type');
    });
  });
});
