import queryBuilder from "../query_builder";

describe("lib/query_builder", () => {

  describe("#queryBuilder", () => {

    it("converts a list of filters into a query for type string", () => {
      const filters = [
        { name: "hmdmc", comparator: "is", value: "123", type: "string" },
        { name: "hmdmc", comparator: "is", value: "456", type: "string" },
        { name: "donor_id", comparator: "is not", value: "xyz", type: "string" },
        { name: "donor_id", comparator: "is", value: "zyx", type: "string" }
      ]

      const result = JSON.stringify(queryBuilder(filters));
      expect(result).to.equal(
        `{"$and":[{"hmdmc":{"$eq":"123"}},{"hmdmc":{"$eq":"456"}},{"donor_id":{"$ne":"xyz"}},{"donor_id":{"$eq":"zyx"}}]}`
      );
    });

    it("converts a list of filters into a query for type date", () => {
      const filters = [
        { name: "date_of_receipt", comparator: "before", value: "2015-01-01", type: "date" },
        { name: "date_of_receipt", comparator: "after", value: "2015-02-01", type: "date" },
        { name: "date_of_receipt", comparator: "on", value: "2015-03-01", type: "date" },
      ]

      const result = JSON.stringify(queryBuilder(filters));
      const beforeDate = new Date(filters[0].value).toUTCString();
      const afterDate = new Date(filters[1].value).toUTCString();
      const onDate = new Date(filters[2].value).toUTCString();
      expect(result).to.equal(
        '{"$and":[{"date_of_receipt":{"$lt":"Thu, 01 Jan 2015 00:00:00 GMT"}},{"date_of_receipt":{"$gte":"Sun, 01 Feb 2015 00:00:00 GMT"}},{"date_of_receipt":{"$gte":"Sun, 01 Mar 2015 00:00:00 GMT"}},{"date_of_receipt":{"$lt":"Mon, 02 Mar 2015 00:00:00 GMT"}}]}'
     );
    });

    it("converts a list of filters into a query for type list", () => {
      const filters = [
        { name: "material_type", comparator: "is", value: "dna", type: "list"},
        { name: "material_type", comparator: "is not", value: "blood", type: "list"},
        { name: "gender", comparator: "is not", value: "male", type: "list" },
        { name: "scientific_name", comparator: "is not", value: "Homo sapiens", type: "list" },
      ]

      const result = JSON.stringify(queryBuilder(filters));
      expect(result).to.equal(
        `{"$and":[{"material_type":{"$eq":"dna"}},{"material_type":{"$ne":"blood"}},{"gender":{"$ne":"male"}},{"scientific_name":{"$ne":"Homo sapiens"}}]}`
      );
    });

    it("converts a list of filters into a query for type boolean", () => {
      const filters = [
        { name: "available", comparator: "equals", value: "true", type: "boolean"},
        { name: "available", comparator: "equals", value: "false", type: "boolean"},
      ]

      const result = JSON.stringify(queryBuilder(filters));
      expect(result).to.equal(
        `{"$and":[{"available":{"$eq":true}},{"available":{"$eq":false}}]}`
      );
    });

    it("converts a list of filters into a query for type float", () => {
      const filters = [
        { name: "concentration", comparator: "no less than", value: "2.5", type: "float"},
        { name: "concentration", comparator: "no more than", value: "4.5", type: "float"},
        { name: "volume", comparator: "less than", value: "55", type: "float"},
        { name: "concentration", comparator: "more than", value: "82", type: "float"},
        { name: "volume", comparator: "equals", value: "108.3", type: "float"},
      ]

      const result = JSON.stringify(queryBuilder(filters));
      expect(result).to.equal(
        `{"$and":[{"concentration":{"$gte":2.5}},{"concentration":{"$lte":4.5}},{"volume":{"$lt":55}},{"concentration":{"$gt":82}},{"volume":{"$eq":108.3}}]}`
      );
    });

    context("when receiving a filtering list with different comparators", () => {

      context("with a list of uuids with operations in an object of inclusion and exclusion uuids", () => {
        it("returns query for an empty list if none of the elements are the same in both lists", () => {
          const filters = [
            {name: "setMembership", comparator: "in", value: "a name", type: "string"},
            {name: "setMembership", comparator: "in", value: "another name", type: "string"}
          ];
          const filteringList = [{"in": ["a1", "a2", "a3"]}, {"in": ["b1", "b2", "b3"]}];

          const result = JSON.stringify(queryBuilder(filters, filteringList));
          expect(result).to.equal(
            `{"$and":[{"_id":{"$in":[]}}]}`
          );
        });

        it("returns a query filtering with the common elements if some elements are the same in both lists", () => {
          const filters = [
            {name: "setMembership", comparator: "in", value: "a name", type: "string"},
            {name: "setMembership", comparator: "in", value: "another name", type: "string"}
          ];

          const filteringList = [{"in": ["a1", "c1", "a3", "d1"]}, {"in": ["b1", "c1", "b3", "d1"]}];

          const result = JSON.stringify(queryBuilder(filters, filteringList));
          expect(result).to.equal(
            `{"$and":[{"_id":{"$in":["c1","d1"]}}]}`
          );
        });


        it("returns query with all the elements of both lists if the lists have shared elements but their comparators are different", () => {
          const filters = [
            {name: "setMembership", comparator: "in", value: "a name", type: "string"},
            {name: "setMembership", comparator: "not in", value: "another name", type: "string"}
          ];

          const filteringList = [{"in": ["a1", "c1", "a3", "d1"]}, {"not_in": ["b1", "c1", "b3", "d1"]}];

          const result = JSON.stringify(queryBuilder(filters, filteringList));
          expect(result).to.equal(
            `{"$and":[{"_id":{"$in":["a1","a3"]}}]}`
          );
        });

        it("returns a query with the shared elements for each comparator when using different comparators", () => {
          const filters = [
            {name: "setMembership", comparator: "in", value: "a name", type: "string"},
            {name: "setMembership", comparator: "not in", value: "another name", type: "string"}
          ];

          const filteringList = [
                    {"in": ["a1", "c1", "a3", "d1"]}, {"not_in": ["a1", "b1"] },
                    {"in": ["b1", "c1", "b3", "d1"]}, {"not_in": ["b1", "c1"]}];

          const result = JSON.stringify(queryBuilder(filters, filteringList));
          expect(result).to.equal(
            `{"$and":[{"_id":{"$in":["d1"]}}]}`
          );
        });

        it("should fail with an exception if more than one comparator is included in one of the filter objects of the list", () => {
          const filters = [
            {name: "setMembership", comparator: "in", value: "a name", type: "string"},
            {name: "setMembership", comparator: "not in", value: "another name", type: "string"}
          ];

          const filteringList = [
                    {"in": ["a1"], "not_in": ["b1"]},
                    {"in": ["b1", "c1", "b3"]}];

          expect(queryBuilder.bind(this, filters, filteringList)).to.throw(Error);
        });

      });
    });

  })

})
