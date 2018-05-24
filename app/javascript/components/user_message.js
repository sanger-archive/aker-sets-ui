import React from 'react';
import { connect, getState } from 'react-redux';

var UserMessageComponent = ({message, msgType}) => {
  var msgType = msgType || 'danger';
  var uMessageClass = "alert alert-"+ msgType;
  if (!message) {
    uMessageClass += " hidden";
  }
  return (<div className={uMessageClass}>{message}</div>);
};

const mapStateToProps = (state) => {
  return {message: state.browser.userMessage && state.browser.userMessage.message,
    msgType: state.browser.userMessage && state.browser.userMessage.msgType };
};

export default connect(mapStateToProps)(UserMessageComponent);
