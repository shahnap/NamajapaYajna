import React, { useState } from 'react';

const DataForm = ({ addData }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addData(text);
    setText('');
  };

  const handlePaste = (e) => {
    e.preventDefault(); 
  };

  return (
    <div>
      <h2>sloga</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onPaste={handlePaste} 
          placeholder="slogaa..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DataForm;
