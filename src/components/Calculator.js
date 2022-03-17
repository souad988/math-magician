import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,
    };
    // this.handlClick=this.handlClick.bind(this);
  }

  // operators=[{
  //   value: '+',
  //   symbol: '+',
  //   id: 'Plus',
  // },
  // {
  //   value: '-',
  //   symbol: '-',
  //   id: 'Minus',
  // },
  // {
  //   value: '',
  //   symbol: '+/-',
  //   id: 'Inverter',
  // },
  // {
  //   value: '*',
  //   symbol: 'x',
  //   id: 'Times',
  // },
  // {
  //   value: '/',
  //   symbol: '÷',
  //   id: 'Divide',
  // }];

  // buttons = [
  //   { value: 'AC',
  //   symbol: 'AC',
  //   id: 'AC',},
  //   { value: '%',
  //   symbol: '%',
  //   id: '%',},
  //   { value: '+/-',
  //   symbol: '+/-',
  //   id: '+/-',},
  //   {
  //     value: '%',
  //     symbol: '%',
  //     id: '%',
  //   },
  //   {
  //     value: '1',
  //     symbol: '1',
  //     id: '',
  //   },
  //   {
  //     value: '2',
  //     symbol: '2',
  //     id: 'Two',
  //   },
  //   {
  //     value: '3',
  //     symbol: '3',
  //     id: 'Three',
  //   },
  //   {
  //     value: '4',
  //     symbol: '4',
  //     id: 'Four',
  //   },
  //   {
  //     value: '5',
  //     symbol: '5',
  //     id: 'Five',
  //   },
  //   {
  //     value: '6',
  //     symbol: '6',
  //     id: 'Six',
  //   },
  //   {
  //     value: '7',
  //     symbol: '7',
  //     id: 'Seven',
  //   }];

  handlClick=(e) => {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator_container">
        <div className="entry">
          {total}
          {operation}
          {next}
        </div>
        <div className="number_container">
          <button className="AC" name="AC" onClick={(e) => this.handlClick(e)} type="button">AC</button>
          <button className="pos_neg" name="+/-" onClick={(e) => this.handlClick(e)} type="button">+/-</button>
          <button className="percent" name="%" onClick={(e) => this.handlClick(e)} type="button">%</button>
          <button className="seven" name="7" onClick={(e) => this.handlClick(e)} type="button">7</button>
          <button className="eight" name="8" onClick={(e) => this.handlClick(e)} type="button">8</button>
          <button className="nine" name="9" onClick={(e) => this.handlClick(e)} type="button">9</button>
          <button className="four" name="4" onClick={(e) => this.handlClick(e)} type="button">4</button>
          <button className="five" name="5" onClick={(e) => this.handlClick(e)} type="button">5</button>
          <button className="six" name="6" onClick={(e) => this.handlClick(e)} type="button">6</button>
          <button className="one" name="1" onClick={(e) => this.handlClick(e)} type="button">1</button>
          <button className="two" name="2" onClick={(e) => this.handlClick(e)} type="button">2</button>
          <button className="three" name="3" onClick={(e) => this.handlClick(e)} type="button">3</button>
          <button className="zero" name="0" onClick={(e) => this.handlClick(e)} type="button">0</button>
          <button className="dot" name="." onClick={(e) => this.handlClick(e)} type="button">.</button>
        </div>
        <div className="operators">
          <button className="divide" name="÷" onClick={(e) => this.handlClick(e)} type="button">÷</button>
          <button className="multiply" name="x" onClick={(e) => this.handlClick(e)} type="button">x</button>
          <button className="add" name="+" onClick={(e) => this.handlClick(e)} type="button">+</button>
          <button className="substruct" name="-" onClick={(e) => this.handlClick(e)} type="button">-</button>
          <button className="equal" name="=" onClick={(e) => this.handlClick(e)} type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
