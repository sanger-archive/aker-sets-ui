import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());

global.chai = chai;
global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();

const testsContext = require.context('../../app/client', true, /_spec\.es6$/);
testsContext.keys().forEach(testsContext);