import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import SelectableSetTable from '../containers/selectable_set_table.es6';
import DroppableSelectedSet from '../containers/droppable_selected_set.es6';
import { Panel, Heading, Body, Footer } from '../components/panel.es6';
import SetPanel, { SetPanelComponent } from '../components/set_panel.es6';
import BottomSetPanel from '../components/bottom_set_panel.es6';
import SetForm from '../containers/add_set_form.es6';
import FontAwesome from '../components/font_awesome.es6';
import UserMessage from '../components/user_message.es6';
import { readEndpoint } from 'redux-json-api';
import { debounce } from '../lib/utils.es6';

class SetShaper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topTabNumber: 0,       // Which tab is open at the top
      bottomTabNumber: 0,    // Which tab is open at the bottom
      userSetsPageNumber: 1, // Which page to fetch next for a User's Sets
      setsPageNumber: 1,     // Which page to fetch next for all Sets
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
      pageAttr: 'userSetsPageNumber',
      action: readEndpoint(`/sets?sort=-created_at&page[number]=${this.state.userSetsPageNumber}&filter[owner_id]=${this.props.userEmail}`)
    })
  }

  fetchNextSets() {
    this.fetchNextPage({
      pageAttr: 'setsPageNumber',
      action: readEndpoint(`/sets?sort=-created_at&page[number]=${this.state.setsPageNumber}`)
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
    const { selectedTopSet, selectedBottomSet, sets, userSets } = this.props;

    let basename = '/simple';

    if (typeof RELATIVE_URL_ROOT != 'undefined') {
      basename = RELATIVE_URL_ROOT + basename;
    }

    return (
      <Router basename={ basename }>
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-12">
              <h1>Set Browser</h1>
            </div>
          </div>

          <UserMessage></UserMessage>

          <div className="row">
            <div className="col-md-3">
              <Panel>
                <Heading title="Sets" />

                <Body onScroll={debounce((e) => this.onScroll(e, 'top'), true)} style={{height: '280px', overflowY: 'scroll'}}>
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a onClick={ (e) => this.setTabNumber('top', 0) } href="#mySets" aria-controls="mySets" role="tab" data-toggle="tab">My Sets</a>
                    </li>
                    <li role="presentation">
                      <a onClick={ (e) => this.setTabNumber('top', 1) } href="#allSets" aria-controls="allSets" role="tab" data-toggle="tab">All Sets</a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="mySets">
                      <SelectableSetTable
                        sets={ userSets }
                        selectionType="top"
                        hideOwner={ true }
                        addLink={ true }
                        fetching={ this.state.fetching }
                      />
                    </div>
                    <div role="tabpanel" className="tab-pane" id="allSets">
                      <SelectableSetTable
                        sets={ sets }
                        selectionType="top"
                        addLink={ true }
                        fetching={ this.state.fetching }
                      />
                    </div>
                  </div>

                </Body>

                <Footer>
                  <SetForm />
                </Footer>
              </Panel>
            </div>

            <div className="col-md-9">
              <Switch>
                <Route exact path='/sets/:set_uuid' component={ SetPanel } />
                <Route component={ SetPanelComponent } />
              </Switch>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">

              <Panel>

                <Body onScroll={debounce((e) => this.onScroll(e, 'bottom'), true)} style={{height: '320px', overflowY: 'scroll'}}>
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a onClick={ (e) => this.setTabNumber('bottom', 0) } href="#mySetsBottom" aria-controls="mySets" role="tab" data-toggle="tab">My Sets</a>
                    </li>
                    <li role="presentation">
                      <a onClick={ (e) => this.setTabNumber('bottom', 1) } href="#sets" aria-controls="sets" role="tab" data-toggle="tab">All Sets</a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="mySetsBottom">
                      <SelectableSetTable
                        sets={ userSets }
                        selectionType="bottom"
                        hideOwner={ true }
                        addLink={ false }
                        fetching={ this.state.fetching }
                      />
                    </div>
                    <div role="tabpanel" className="tab-pane" id="sets">
                      <SelectableSetTable
                        sets={ sets }
                        selectionType="bottom"
                        addLink={ false }
                        fetching={ this.state.fetching }
                      />
                    </div>
                  </div>

                </Body>

              </Panel>

            </div>

            <div className="col-md-9">
              <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>
                <BottomSetPanel set={ selectedBottomSet } />
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
  userSets: []
}

export default SetShaper;
