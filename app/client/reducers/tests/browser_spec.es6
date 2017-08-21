import browser from '../browser.es6';

describe('reducers/browser', () => {

  describe('Store Items', () => {

    it('returns an object with items', () => {
      const state = browser(null, { type: 'STORE_ITEMS', items: ['item1', 'item2']});
      expect(state).to.deep.equal({ items: ['item1', 'item2'] })
    })

  })
})