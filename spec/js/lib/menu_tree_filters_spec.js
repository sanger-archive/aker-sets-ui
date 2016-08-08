const util = require('util')
import * as filter from '../../../app/client/lib/menu_tree_filters.es6';

describe('menu_tree_filters', function() {

  describe('#defaultMatcher', function() {

    before(function() {
      this.node = { name: 'this is within the name' };
    })

    context('when filterText is within the node name', function() {
      before(function() {
        this.filter = 'within'
      })

      it('returns true', function() {
        expect(filter.defaultMatcher(this.filter, this.node)).to.be.ok
      })
    })


    context('when filterText is not within the node name', function() {
      before(function() {
        this.filter = 'nope'
      })

      it('returns false', function() {
        expect(filter.defaultMatcher(this.filter, this.node)).to.not.be.ok
      })
    })
  })

  describe('#findNode', function() {

    context('when matcher matches', function() {

      before(function() {
        this.node = { name: 'lord of the nodes' }
        this.filter = 'lord'
      })

      it('returns true', function() {
        expect(filter.findNode(this.node, this.filter, filter.defaultMatcher)).to.be.ok
      })

    })

    context('when matcher does not match', function() {
      context('when the node has no children', function() {

        before(function() {
          this.node = { name: 'lord of the nodes', children: [] }
          this.filter = 'god';
        })

        it('returns false', function() {
          expect(filter.findNode(this.node, this.filter, filter.defaultMatcher)).to.not.be.ok
        })

      })

      context('when the node has children that match', function() {

        before(function() {
          this.node = { name: 'lord of the nodes', children: [
            { name: 'bored of the nodes', children: [
              { name: 'we have a winner', children: [] }
            ]}
          ]};

          this.filter = 'winner';
        })

        it('returns true', function() {
          expect(filter.findNode(this.node, this.filter, filter.defaultMatcher)).to.be.ok
        })

      })
    })

  })

  describe('#filterTree', function() {

    context('when the matcher matches', function() {

      before(function() {
        this.node = { name: 'lord of the nodes', children: [{ name: 'node away'}] }
        this.filter = 'lord'
      })

      it('returns the node', function() {
        expect(filter.filterTree(this.node, this.filter)).to.eql(this.node)
      })

    })

    context('when the node does not have children', function() {

      before(function() {
        this.node = { name: 'lord of the nodes' };
        this.filter = 'no match';
      })

      it('returns the node', function() {
        expect(filter.filterTree(this.node, this.filter)).to.eql(this.node)
      })
    })

    context('when it has children that match', function() {

      before(function() {
        this.node = { name: 'lord of the nodes', children: [
          { name: 'bored of the nodes', children: [
            { name: 'we have a winner', children: [] }
          ]},
          { name: 'garlicy crispy things' },
          { name: 'node wars', children: [
            { name: 'bored' }
          ]}
        ]};

        this.filter = 'bored';
      })

      it('returns the children with their ancestory', function() {
        const expectation = {
          name: 'lord of the nodes', children: [
            { name: 'bored of the nodes', children: [
              { name: 'we have a winner', children: [] }
            ] },
            { name: 'node wars', children: [
              { name: 'bored' }
            ]}
          ]
        };

        expect(filter.filterTree(this.node, this.filter)).to.eql(expectation)
      })

    })

  })

  describe('#expandFilteredNodes', function() {

    context('when node has no children', function() {
      before(function() {
        this.node = { name: 'childless', children: [] };
      })

      it('returns it with toggled: false', function() {
        expect(filter.expandFilteredNodes(this.node, '')).to.have.property('toggled', false)
      })
    })

    context('when node has children but no matches', function() {
      before(function() {
        this.node = { name: 'lord of the rings', children: [
          { name: 'interstellar', children: [] },
          { name: 'star trek', children: [] },
          { name: '2001: a space odyssey', children: [
            { name: 'harry potter' }
          ] },
        ]}

        this.filter = 'no matches'
      })

      it('returns the node with all toggled set to false', function() {

        const expected = { name: 'lord of the rings', toggled: false, children: [
          { name: 'interstellar', children: [] },
          { name: 'star trek', children: [] },
          { name: '2001: a space odyssey', children: [
            { name: 'harry potter' }
          ] },
        ]};

        expect(filter.expandFilteredNodes(this.node, this.filter)).to.eql(expected);
      })

    })

    context('when node has child that matches', function() {
      before(function() {
        this.node = { name: 'lord of the rings', children: [
          { name: 'interstellar', children: [] },
          { name: 'star trek', children: [] },
          { name: '2001: a space odyssey', children: [
            { name: 'harry potter' }
          ] },
        ]}

        this.filter = 'potter'
      })

      it('returns the node with toggled set to true', function() {

        const expected = { name: 'lord of the rings', toggled: true, children: [
          { name: '2001: a space odyssey', toggled: true, children: [
            { name: 'harry potter', toggled: false }
          ] },
        ]};

        expect(filter.expandFilteredNodes(this.node, this.filter)).to.eql(expected);
      })

    })

  })

})