import React from 'react';
import { connect, getState } from 'react-redux';
import StamperPanel from '../components/stamper_panel.es6'
import { selectStamp, applyStamp, unapplyStamp} from '../actions'


const mapStateToProps = (state) => {
  return {
    stamps: state.stampsInfo.stamps,
    status: state.stampsInfo.status,
    selectedStamp: state.stampsInfo.selectedStamp,
    shownItems: state.search.results.length > 0
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    onStampClick: (id) => {
      dispatch(applyStamp(id));
    },
    onUnstampClick: (id) => {
      dispatch(unapplyStamp(id));
    },
    onChangeSelectedStamp: (event) => {
      dispatch(selectStamp(event.target.value));
    }
  };
}

const StamperControl = connect(mapStateToProps, mapDispatchToProps)(StamperPanel);

export default StamperControl;

