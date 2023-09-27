import React from 'react';

const DataList = ({ dataList, clearList }) => {
  return (
    <div>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button type='button' onClick={clearList}>Clear</button>
    </div>
  );
};

export default DataList;


// {totalTextCount}
// {textCount}