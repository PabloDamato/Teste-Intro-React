import React, { useState } from 'react';
import './Contador.css';
import IncrementButton from '../Incrementar/Incrementar';
import DecrementButton from '../Decrementar/Decrementar';
import ResetButton from '../Reset/Reset';

function Contador({ children, valorInicial }) {
  const [count, setCount] = useState(valorInicial); // Estado para armazenar o valor do contador

  const increment = () => {
    setCount(count + 1); // Incrementa o valor do contador
  };

  const decrement = () => {
    setCount(count - 1); // Decrementa o valor do contador
  };

  const reset = () => { // zera o valor do contador
    setCount(0);
  };

  return (
    <div className="contador">
      
      <div className="nome-app">
        {children}
      </div>
      
      <div className="container">
        <IncrementButton onClick={increment}/> {/*Chama o componente IncrementButton*/}
        <div className="count">{count}</div>
        <DecrementButton onClick={decrement}/> {/*Chama o componente DecrementButton*/}
      </div>

      <div>
        <ResetButton onClick={reset}/> {/*Chama o componente ResetButton*/}
      </div>
      
    </div>
  );
}

export default Contador;
