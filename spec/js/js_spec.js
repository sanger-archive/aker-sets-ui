import "babel-polyfill";
import chaiEnzyme from 'chai-enzyme'

import './components/font_awesome_spec.js';
import './lib/utils.js';

chai.use(chaiEnzyme());