import React from 'react';
import { shallow } from 'enzyme';
import ExportButton from '../export_button';
import { createMemoryHistory as createHistory } from "history";

describe('<ExportButton />', () => {

  let props;
  let wrappedExportButton;

  const exportButton = () => {
    if (wrappedExportButton) {
      return wrappedExportButton;
    }
    wrappedExportButton = shallow(<ExportButton {...props} />);
    return wrappedExportButton;
  };

  beforeEach(() => {
    props = {
      set: undefined,
      extension: undefined,
      history: undefined // React Router's history object
    }
    wrappedExportButton = undefined;
  })

  describe('the link', () => {

    beforeEach(() => {
      props.set = { id: "abcd-1234-wxyz" };
      props.history = createHistory();
    });

    it('has a link', () => {
      const link = exportButton().find('a');
      expect(link).to.have.length(1);
    })

    it('links to the Set export URL', () => {
      const link = exportButton().find('a');
      expect(link.prop('href')).to.include('/sets/abcd-1234-wxyz');
    })

    context('when extension is not passed', () => {

      it('defaults to .tsv', () => {
        const link = exportButton().find('a');
        expect(link.prop('href')).to.include('.tsv');
      })
    })

    context('when extension is passed', () => {

      beforeEach(() => {
        props.extension = 'csv';
      })

      it('uses that extension', () => {
        const link = exportButton().find('a');
        expect(link.prop('href')).to.include('.csv');
      })

    })

    context('when location with search is passed', () => {

      beforeEach(() => {
        props.history.location = { search: "?sortBy=amount&order=-1" };
      })

      it('is added to the link', () => {
        const link = exportButton().find('a');
        expect(link.prop('href')).to.include('?sortBy=amount&order=-1');
      })
    })

  })

})