import React from 'react';
import classNames from 'classnames';

const SetTable = ({ sets, selected_set, onSetClick }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        { sets.map((set, index) => {
          return <SetRow set={set} selected={(set.id == selected_set)} onClick={onSetClick} key={index} />;
        })}
      </tbody>
    </table>
  )
};

SetTable.defaultProps = {
  selected_set: undefined
}

export default SetTable;

const SetRow = ({ set, selected, onClick }) => {
  const trClass = classNames({
    info: selected
  })

  return (
    <tr className={ trClass } style={{cursor: 'pointer'}} onClick={ () => onClick(set.id) }>
      <td>{ set.attributes.name }</td>
      <td>{ new Date(set.attributes.created_at).toDateString() }</td>
      <td>{ set.meta.size }</td>
    </tr>
  );
};