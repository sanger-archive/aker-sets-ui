import React from 'react';
import FontAwesome from './font_awesome.es6';
import { STAMPS_INITIALIZATION, RECEIVE_ALL_STAMPS, RECEIVE_EMPTY_STAMPS, RECEIVE_EMPTY_RESULTS, FETCH_ALL_STAMPS} from '../actions/index.es6';

const StamperPanel = ({stamps, selectedStamp, status, onStampClick, onUnstampClick, onChangeSelectedStamp }) => {

  const stampsOptions = $.map(stamps, (stamp) => {
    return (
      <option key={stamp.id} value={ stamp.id }>{ stamp.attributes.name }</option>
    );
  });

  const initializingView = () => {
      return (<span><FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome>Initializing stamps...</span>);
  };

  const fetchingView = () => {
    return (<span><FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome>Loading stamps...</span>);
  };

  const emptyView = () => {
    return (<div></div>);
  };

  const receivedView = () => {
    const selectedStampId = selectedStamp ? selectedStamp.id : stamps[0].id;

    return (
      <form className="form-inline" style={{marginTop: '5px'}}>
        <label>
          Select a stamp:
          <select className='form-control' defaultValue={selectedStampId} onChange={ onChangeSelectedStamp } style={{marginLeft: '10px'}}>
            { stampsOptions }
          </select>
        </label>
        <button style={{marginLeft: '10px'}} type="button" className="btn btn-primary" onClick={ () => { onStampClick(selectedStampId) } }>Apply</button>
        <button style={{marginLeft: '10px'}} type="button" className="btn btn-primary" onClick={ () => { onUnstampClick(selectedStampId) } }>Unapply</button>
      </form>
    );
  };

  let render = emptyView;

  switch(status) {
    case STAMPS_INITIALIZATION:
      render = initializingView;
      break;
    case FETCH_ALL_STAMPS:
      render = fetchingView;
      break;
    case RECEIVE_EMPTY_RESULTS:
    case RECEIVE_EMPTY_STAMPS:
      render = emptyView;
      break;
    case RECEIVE_ALL_STAMPS:
      render = receivedView;
      break;
    default:
      render = emptyView;
      break;
  }

  return render();

};

export default StamperPanel;