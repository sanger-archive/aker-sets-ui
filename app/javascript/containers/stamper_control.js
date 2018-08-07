import React from 'react';
import { connect, getState } from 'react-redux';
import StamperPanel from '../presentation/stamper_panel'
import { selectStamp, applyStamp, unapplyStamp} from '../actions/index'

const mapStateToProps = (state) => {
  return {
    stamps: state.stampsInfo.stamps,
    status: state.stampsInfo.status,
    selectedStamp: state.stampsInfo.selectedStamp,
    loading: state.loading
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

