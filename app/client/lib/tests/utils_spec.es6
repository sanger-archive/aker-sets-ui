import { debounce } from '../utils.es6';

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
    })

  })

})