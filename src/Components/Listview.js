import React from 'react';

const ListView = ({ dataList, lastEnteredTextIndex }) => {
  return (
    <div>
      <ul>
        {dataList.map((item, index) => (
          <div className={`message ${index === lastEnteredTextIndex ? 'last-entered-text' : ''}`} key={index}>
            <span className="list-item-number">{index + 1}.</span>
            <span className="list-item-text">{item.text}</span>
            <span className="message-time">{item.time}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};


export default ListView;
