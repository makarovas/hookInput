import React, { useState, useEffect } from 'react';

export default function Input() {
  const [input, setInput] = useState('');
  useEffect(() => {
    document.title = `${240 - input.length}characters left`;
  }, [input]);
  return (
    <div>
      <textarea
        type="text"
        value={input}
        placeholder="type"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        disabled={input.length === 0 || input.length > 240}
        onClick={() => console.log(input)}
      >
          Submit
      </button>
    </div>
  );
}
