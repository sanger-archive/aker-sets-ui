import "babel-polyfill";
import chaiEnzyme from 'chai-enzyme'

import './components/font_awesome_spec.js';
import './components/program_spec.js';
import './lib/menu_tree_filters_spec.js';
import './lib/utils.js';

chai.use(chaiEnzyme());