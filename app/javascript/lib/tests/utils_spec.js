import { debounce, currentSearchQueryBuilder, filterLinks } from '../utils';

describe('Utils', function() {

  describe('#debounce', function() {
    before(function() {
      this.spy = sinon.spy();
      this.fn = debounce(this.spy, 32);
    });

    it('only calls the debounced function once every n milliseconds', function(done) {
      this.fn();
      this.fn();
      setTimeout(this.fn, 16);
      setTimeout(function() {
        expect(this.spy).to.have.been.calledOnce
        done();
      }.bind(this), 96)
    });

  });

  describe('#currentSearchQueryBuilder', () => {
    it('filters out any filter that does not match the criteria', () => {
      const filters = [
        { id: 1, name: "available", comparator: "equals", value: "true", type: "boolean" },
        { id: 1, name: "gender", comparator: "is", value: "male", type: "list" },
        { id: 1, name: "", comparator: "", value: "" },
      ];

      const filtered = currentSearchQueryBuilder(filters);
      expect(filtered.length).to.equal(2);
    })

  });

});
