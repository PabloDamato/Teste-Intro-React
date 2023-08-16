import React from 'react';
import './Incrementar.css';

function IncrementButton({ onClick }) {
  return (
    <button className="button-incrementar" onClick={onClick}>
      +
    </button>
  );
}

export default IncrementButton;
