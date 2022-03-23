import './Calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcstate, setCalcstate] = useState({
    total: '',
    next: null,
    operation: null,
  });

  const handlClick = (e) => {
    setCalcstate((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  };
  return (
    <div className="calculator_container">
      <div className="entry">
        {calcstate.total}
        {calcstate.operation}
        {calcstate.next}
      </div>
      <div className="number_container">
        <button className="AC" name="AC" onClick={(e) => handlClick(e)} type="button">AC</button>
        <button className="pos_neg" name="+/-" onClick={(e) => handlClick(e)} type="button">+/-</button>
        <button className="percent" name="%" onClick={(e) => handlClick(e)} type="button">%</button>
        <button className="seven" name="7" onClick={(e) => handlClick(e)} type="button">7</button>
        <button className="eight" name="8" onClick={(e) => handlClick(e)} type="button">8</button>
        <button className="nine" name="9" onClick={(e) => handlClick(e)} type="button">9</button>
        <button className="four" name="4" onClick={(e) => handlClick(e)} type="button">4</button>
        <button className="five" name="5" onClick={(e) => handlClick(e)} type="button">5</button>
        <button className="six" name="6" onClick={(e) => handlClick(e)} type="button">6</button>
        <button className="one" name="1" onClick={(e) => handlClick(e)} type="button">1</button>
        <button className="two" name="2" onClick={(e) => handlClick(e)} type="button">2</button>
        <button className="three" name="3" onClick={(e) => handlClick(e)} type="button">3</button>
        <button className="zero" name="0" onClick={(e) => handlClick(e)} type="button">0</button>
        <button className="dot" name="." onClick={(e) => handlClick(e)} type="button">.</button>
      </div>
      <div className="operators">
        <button className="divide" name="÷" onClick={(e) => handlClick(e)} type="button">÷</button>
        <button className="multiply" name="x" onClick={(e) => handlClick(e)} type="button">x</button>
        <button className="add" name="+" onClick={(e) => handlClick(e)} type="button">+</button>
        <button className="substruct" name="-" onClick={(e) => handlClick(e)} type="button">-</button>
        <button className="equal" name="=" onClick={(e) => handlClick(e)} type="button">=</button>
      </div>
    </div>
  );
};

export default Calculator;
