import React from 'react';

export const Panel = (props) => {
  return (
    <div className="panel panel-default">
      {props.children}
    </div>
  )
};

export const Heading = (props) => {
  let panel_title = '';

  if (props.title) {
    panel_title = <h3 className="panel-title">{props.title}</h3>
  }

  return (
    <div className="panel-heading">
      {panel_title}
      {props.children}
    </div>
  );
};

export const Body = (props) => {
  return (
    <div {...props} className="panel-body">
      {props.children}
    </div>
  )
};

export const Footer = (props) => {
  return (
    <div className="panel-footer">
      {props.children}
    </div>
  )
};