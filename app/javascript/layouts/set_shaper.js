import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SelectableSetTable from '../containers/selectable_set_table';
import { Heading, Body, Footer } from '../components/panel';
import Panel from 'react-bootstrap/lib/Panel'
import SetPanel, { SetPanelComponent } from '../components/set_panel';
import BottomSetPanel from '../components/bottom_set_panel';
import SetForm from '../containers/add_set_form';
import FontAwesome from '../components/font_awesome';
import UserMessage from '../components/user_message';
import { readEndpoint } from 'redux-json-api';
import { debounce } from '../lib/utils';
import { fetchPageForTop, fetchPageForBottom } from '../actions/index';

class SetShaper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topTabNumber: 0,       // Which tab is open at the top
      bottomTabNumber: 0,    // Which tab is open at the bottom
      userSetsPage: 1, // Which page to fetch next for a User's Sets
      setsPage: 1,     // Which page to fetch next for all Sets
      fetching: false        // Are we fetching?
    };

    this.fetchNextUserSets = this.fetchNextUserSets.bind(this);
    this.fetchNextSets     = this.fetchNextSets.bind(this);
    this.onScroll          = this.onScroll.bind(this);
    this.setTabNumber      = this.setTabNumber.bind(this);
  }

  componentDidMount() {
    this.fetchNextUserSets();
    this.fetchNextSets();
  }

  fetchNextUserSets() {
    this.fetchNextPage({
      pageAttr: 'userSetsPage',
      action: readEndpoint(`/sets?sort=-created_at&page[number]=${this.state.userSetsPage}&filter[owner_id]=${this.props.userEmail}`)
    })
  }

  fetchNextSets() {
    this.fetchNextPage({
      pageAttr: 'setsPage',
      action: readEndpoint(`/sets?sort=-created_at&page[number]=${this.state.setsPage}`)
    })
  }

  // { pageAttr: 'String', action: ReduxAction }
  fetchNextPage({ pageAttr, action }) {
    // Page number is null when there's no next page so just ignore
    if (this.state[pageAttr] == null || this.state.fetching) return;

    this.setState({ fetching: true });

    return this.props.dispatch(action).then((res) => {
      this.setState((prevState) => ({
        // Update the next page number or set it to null if there isn't a next page
        [pageAttr]: !!(res.body.links.next) ? prevState[pageAttr] + 1 : null,
        fetching: false
      }))
    })
  }

  // The "Infinite" scroll
  onScroll(e, location) {
    // Get the necessary attributes of the target element (Body)
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    // Once we get (pretty much) to the bottom of the div
    if (scrollTop + clientHeight >= scrollHeight - 25) {
      // Either fetch a page of User Sets or All Sets depending on which tab is in which location
      this.state[`${location}TabNumber`] == 0 ? this.fetchNextUserSets() : this.fetchNextSets();
    }
  }

  setTabNumber(location, number) {
    this.setState({ [`${location}TabNumber`]: number })
  }

  render() {
    const { selectedTopSet, selectedBottomSet, sets, userSets, materials } = this.props;

    let basename = '/';

    if (typeof RELATIVE_URL_ROOT != 'undefined') {
      basename = RELATIVE_URL_ROOT + basename;
    }

    return (
      <Router basename={ basename }>
        <div className="container-fluid">
          <UserMessage></UserMessage>
          <div className="row" style={{"marginBottom": "20px"}}>
            <div className="col-md-3">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">My Created Sets</a></li>
                <li><a data-toggle="tab" href="#top-help">Help<FontAwesome icon="question" style={{"color": "#2196F3"}} /></a></li>
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                  <div onScroll={debounce((e) => this.onScroll(e, 'top'), true)} style={{height: '280px', overflowY: 'scroll'}}>
                    <SelectableSetTable
                      sets={ userSets }
                      selectionType="top"
                      onSetClickAction={ fetchPageForTop }
                      hideOwner={ true }
                      addLink={ true }
                      showLocked={ false }
                      fetching={ this.state.fetching }
                    />
                  </div>
                  <SetForm />
                </div>
                <div id="top-help" className="tab-pane fade" style={{"padding": "5px"}}>
                  <div>
                  <p>Find the set you wish to edit using the "My Created Sets" tab.
                  The materials in your selected set will be listed in the box to the
                  right. Alternatively, you can create a new empty set using the text
                  box.</p><p>Materials that are <span className="text-muted">greyed
                  out</span> are unavailable, either because they are part of an
                  active work order, or because they have not yet been received by
                  Sample Management. However, this has no impact on your ability to
                  manipulate those materials within sets.</p><p>Use
                  <FontAwesome icon="times" /> to remove materials from a set.</p>
                  <p>When browsing materials within a set, use the "First", "Previous",
                  "Next" and "Last" buttons to move through pages of 25 materials.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <Switch>
                <Route exact path='/simple/sets/:set_uuid' render={({ location, ...rest }) => {
                  // If there's no queryString (search), set a default sortBy
                  // This seems to be the best (only?) way to make a default sortBy be passed down to the rest
                  // of the application
                  if (location.search == '') location = Object.assign({}, location, { search: '?sortBy=amount' });
                  return <SetPanel { ...rest } location={ location } />;
                }} />
                <Route component={ SetPanelComponent } />
              </Switch>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a onClick={ (e) => this.setTabNumber('bottom', 0) } href="#mySetsBottom" aria-controls="mySets" role="tab" data-toggle="tab">My Sets</a>
                </li>
                <li role="presentation">
                  <a onClick={ (e) => this.setTabNumber('bottom', 1) } href="#sets" aria-controls="sets" role="tab" data-toggle="tab">All Sets</a>
                </li>
                <li><a data-toggle="tab" href="#bottom-help">Help<FontAwesome icon="question" style={{"color": "#2196F3"}} /></a></li>
              </ul>

              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="mySetsBottom" style={{height: '340px', overflowY: 'scroll'}}>
                  <SelectableSetTable
                    sets={ userSets }
                    selectionType="bottom"
                    onSetClickAction={ fetchPageForBottom }
                    hideOwner={ true }
                    addLink={ false }
                    fetching={ this.state.fetching }
                  />
                </div>
                <div role="tabpanel" className="tab-pane" id="sets" style={{height: '340px', overflowY: 'scroll'}}>
                  <SelectableSetTable
                    sets={ sets }
                    selectionType="bottom"
                    onSetClickAction={ fetchPageForBottom }
                    addLink={ false }
                    fetching={ this.state.fetching }
                  />
                </div>
                <div role="tabpanel" className="tab-pane" id="bottom-help" style={{"padding": "5px"}}>
                <p>Here you can find materials that you wish to add to the set
                you have selected above. You can look through your own sets -
                including those which are locked - or all of the sets within
                Aker (using the "All Sets" tab).</p><p>Once
                you've found the materials you're interested in, drag them into
                your chosen set in the top window to add the material to that
                set. Use 'CMD' or 'CTRL' and click to select multiple materials,
                or select one material, then 'SHIFT' and click another to select
                all materials between (inclusive).</p><p><strong>Sets cannot be
                changed</strong> in this section, so any materials you drag
                into an above set will also remain in their original set.</p>
                <p>A locked set (marked by
                 <FontAwesome icon="lock" style={{"color": "#e61c1c"}} />)
                cannot be changed in any way, as it exists to provide a record of
                work.</p>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>
                <BottomSetPanel set={ selectedBottomSet } materials={ materials['bottom'] }  />
              </ReactCSSTransitionGroup>
            </div>
          </div>

        </div>
      </Router>
    )
  }
};

SetShaper.defaultProps = {
  selectedTopSet: { attributes: { name: ''}},
  selectedBottomSet: { attributes: { name: ''}},
  sets: [],
  userSets: [],
  materials: {}
}

export default SetShaper;
