import React from 'react';

export default function Controls({ head, setHead }) {
  const handleHead = (event) => {
    setHead(event.target.value);
  };

  return (
    <div className="controls">
      <h1>Do not like my face? Change it!</h1>
      <select value={head} onChange={handleHead}>
        <option value="beefboy">Beefboy</option>
        <option value="nobody">Nobody</option>
        <option value="unenthused-man">Unenthused Man</option>
        <option value="pig">Pig</option>
      </select>
    </div>
  );
}
