import React from 'react';
import FontAwesome from './font_awesome.es6';

const StamperPanel = ({stamps, selectedStamp, shownItems, status, onStampClick, onUnstampClick, onChangeSelectedStamp }) => {

  const stampsOptions = $.map(stamps, (stamp) => {
    return (
      <option key={stamp.id} value={ stamp.id }>{ stamp.attributes.name }</option>
    );
  });

  if (!shownItems) {
    return(<div></div>);
  }

  if (status=='init') {
    return (<span><FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome>Initializing stamps...</span>);
  }

  if (status=='fetching') {
    return (<span><FontAwesome icon="spinner fa-spin" size="lg"></FontAwesome>Loading stamps...</span>)
  }

  const selectedStampId = selectedStamp ? selectedStamp.id : stamps[0].id;

  return (
    <form className="form-inline" style={{marginTop: '5px'}}>
      <label>
        Select a stamp:
        <select style={{marginLeft: '10px'}} className='form-control' defaultValue={selectedStampId} onChange={ onChangeSelectedStamp } >
          { stampsOptions }
        </select>
      </label>
      <button style={{marginLeft: '10px'}} type="button" className="btn btn-primary" onClick={ () => { onStampClick(selectedStampId) } }>Apply</button>
      <button style={{marginLeft: '10px'}} type="button" className="btn btn-primary" onClick={ () => { onUnstampClick(selectedStampId) } }>Unapply</button>
    </form>
  )
};

export default StamperPanel;