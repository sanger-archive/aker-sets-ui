import React from 'react';
import { Panel, Heading, Body } from './panel.es6';

const SearchResultsTable = (props) => {
  const { headings, items} = props;
  return (
    <Panel>
      <Heading title='Results' />
      <Body>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              { headings.map((heading) => { return (<th>{heading}</th>); }) }
            </tr>
          </thead>
          <tbody>
            { items.map((item) => { return <SearchResultsRow headings={headings} item={item} />; }) }
          </tbody>
        </table>
      </Body>
    </Panel>
  );
}

const SearchResultsRow = (props) => {
  const { headings, item } = props;
  return (
    <tr>
      { headings.map((heading) => { return (<td>{item[heading]}</td>); }) }
    </tr>
  );
}

export default SearchResultsTable;
