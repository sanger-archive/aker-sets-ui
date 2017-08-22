import React from 'react';
import classNames from 'classnames';
import FontAwesome from './font_awesome.es6';

const SetTable = ({ sets, selected_set, onSetClick, hideOwner }) => {
  var ownerHeader = '';
  if (!hideOwner){
    ownerHeader = <th>Owner</th>;
  }
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Size</th>
          { ownerHeader }
        </tr>
      </thead>
      <tbody>
        { sets.map((set, index) => {
          return <SetRow set={set} selected={(set.id == selected_set)} onClick={onSetClick} key={index} hideOwner={hideOwner} />;
        })}
      </tbody>
    </table>
  )
};

SetTable.defaultProps = {
  selected_set: undefined
}

export default SetTable;

const SetRow = ({ set, selected, onClick, hideOwner }) => {
  const trClass = classNames({
    info: selected
  })

  var ownerCell = '';
  if (!hideOwner) {
    if (set.attributes.owner_id) {
      ownerCell = <td>{ set.attributes.owner_id }</td>;
    } else {
      ownerCell = <td><i>Not set</i></td>;
    }
  }

  return (
    <tr className={ trClass } style={{cursor: 'pointer'}} onClick={ () => onClick(set.id) }>
      <td>{ set.attributes.name } { set.attributes.locked && <FontAwesome icon="lock" style={{"color": "#e61c1c"}} /> }</td>
      <td>{ new Date(set.attributes.created_at).toDateString() }</td>
      <td>{ set.meta.size }</td>
      { ownerCell }
    </tr>
  );
};