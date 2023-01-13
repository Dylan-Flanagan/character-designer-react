import React from 'react';

export default function Display({ head }) {
  return (
    <div>
      <img src={`/heads/${head}.png`} />
    </div>
  );
}
