import queryBuilder from '../query_builder.es6';

describe('lib/query_builder', () => {

  describe('#queryBuilder', () => {

    it('converts a list of filters into a query for type string', () => {
      const filters = [
        { name: 'hmdmc', comparator: 'is', value: '123', type: 'string' },
        { name: 'donor_id', comparator: 'is not', value: 'xyz', type: 'string' },
      ]

      const result = JSON.stringify(queryBuilder(filters));
      expect(result).to.equal(
        `{"hmdmc":"123","donor_id":{"$ne":"xyz"}}`
      );
    });

    it('converts a list of filters into a query for type date', () => {
      const filters = [
        { name: 'date_of_receipt', comparator: 'before', value: '10/01/15', type: 'date' },
        { name: 'date_of_receipt', comparator: 'after', value: '10/01/11', type: 'date' },
        { name: 'date_of_receipt', comparator: 'on', value: '10/01/13', type: 'date' },
      ]

      const result = JSON.stringify(queryBuilder(filters));
      // current date of receipt only sends the last key and value
      const onDate = new Date(filters[2].value).toUTCString();
      expect(result).to.equal(
        `{"date_of_receipt":"${onDate}"}`
      );
    });

    it('converts a list of filters into a query for type list', () => {
      const filters = [
        { name: 'material_type', comparator: 'is', value: 'dna', type: 'list'},
        { name: 'gender', comparator: 'is not', value: 'male', type: 'list' },
      ]

      const result = JSON.stringify(queryBuilder(filters));
      expect(result).to.equal(
        `{"material_type":"dna","gender":{"$ne":"male"}}`
      );
    });

    it('converts a list of filters into a query for type boolean', () => {
      const filters = [
        { name: 'available', comparator: 'equals', value: 'true', type: 'boolean'},
      ]

      const result = JSON.stringify(queryBuilder(filters));
      expect(result).to.equal(
        `{"available":true}`
      );
    });

  })

})

