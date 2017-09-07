import material_properties from 'reducers/material_properties.es6';

describe('Material Properties Reducer', function() {

  before(function() {
    this.state = {
      required: [],
      properties: {

        // Boolean
        available: {
          default: false,
          required: false,
          type: "boolean"
        },

        // List
        scientific_name: {
          required: true,
          type: "string",
          allowed: [
            "Homo sapiens",
            "Mus musculus"
          ]
        },

        // String
        donor_id: {
          required: true,
          type: "string"
        },

        // Date
        date_of_receipt: {
          type: "string",
          format: "date"
        }
      }
    };
  });

  it('transforms a Materials Schema into the correct data format', function() {

    let result = material_properties(this.state, 'RECEIVE_MATERIAL_SCHEMA');

    expect(result).to.be.an.instanceof(Array);

  })

});