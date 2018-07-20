import search from '../search'
import { updateFilterName, updateFilterComparator, updateFilterValue, removeFilter, addFilter,
  setCurrentSearch, receiveSearchResults } from '../../actions/search'

describe('reducers/search', () => {
  describe('Update filters', () => {

    let oldState = []

    beforeEach(() => {
      oldState = {
        fields: {
          hmdmc: {
            'type': 'string',
            'comparators': ['is', 'is not']
          }
        },
        current: [],
        filters: [
          { name: 'gender', comparator: 'after', value: 'female' },
          { name: 'donor_id', comparator: 'equals', value: 'female' },
          { name: 'material_type', comparator: 'equals', value: 'male' }
        ]
      }
    })

    it('Updates the name at the correct index', () => {
      const action = updateFilterName(0, 'hmdmc')
      const newState = search(oldState, action)
      expect(newState.filters[0].name).to.equal('hmdmc')
      expect(newState.filters[0].comparator).to.equal('is')
      expect(newState.filters[0].value).to.equal('')
      expect(newState.filters).to.deep.include(oldState.filters[1])
      expect(newState.filters).to.deep.include(oldState.filters[2])
    });

    it('Updates the comparator at the correct index', () => {
      const action = updateFilterComparator(0, 'before')
      const newState = search(oldState, action)
      expect(newState.filters[0].comparator).to.equal('before')
      expect(newState.filters).to.deep.include(oldState.filters[1])
      expect(newState.filters).to.deep.include(oldState.filters[2])
    });

    it('Updates the value at the correct index', () => {
      const action = updateFilterValue(0, 'male')
      const newState = search(oldState, action)
      expect(newState.filters[0].value).to.equal('male')
      expect(newState.filters).to.deep.include(oldState.filters[1])
      expect(newState.filters).to.deep.include(oldState.filters[2])
    })

    it('Removes the filter at the correct index', () => {
      const action = removeFilter(1)
      const newState = search(oldState, action)
      expect(newState.filters).to.not.deep.include(oldState.filters[1])
      expect(newState.filters).to.have.lengthOf(2)
    })

    it('Adds another filter', () => {
      const action = addFilter()
      const newState = search(oldState, action)
      expect(newState.filters).to.have.lengthOf(4)
    })
  });

  describe('Set current search', () => {
    let oldState = []

    beforeEach(() => {
      oldState = {
        current: [],
        filters: [
          { name: 'gender', comparator: 'after', value: 'female' },
          { name: 'donor_id', comparator: 'equals', value: 'female' },
          { name: 'material_type', comparator: 'equals', value: 'male' },
          { name: 'owner_id', comparator: 'equals', value: 'aKeR   ' },
          { name: 'owner_id', comparator: 'equals', value: 'aker' }
        ]
      }
    })

    it('Updates the state to have current search', () => {
      const action = setCurrentSearch()
      const newState = search(oldState, action)
      expect(newState.current).to.have.lengthOf(5)
      expect(newState.current[0]).to.include({ name: 'gender', comparator: 'after', value: 'female' })
      expect(newState.current[1]).to.include({ name: 'donor_id', comparator: 'equals', value: 'female' })
      expect(newState.current[2]).to.include({ name: 'material_type', comparator: 'equals', value: 'male' })
      expect(newState.current[3]).to.include({ name: 'owner_id', comparator: 'equals', value: 'aker' })
      expect(newState.current[4]).to.include({ name: 'owner_id', comparator: 'equals', value: 'aker' })
    })
  });

})