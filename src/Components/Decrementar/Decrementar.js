import React from 'react';
import './Decrementar.css';

function DecrementButton({ onClick }) {
  return (
    <button className="button-decrementar" onClick={onClick}>
      -
    </button>
  );
}

export default DecrementButton;
