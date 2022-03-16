import './Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="calculator_container">
        <input id="entry" type="text" />
        <div className="number_container">
          <div className="AC">AC</div>
          <div className="pos_neg">+/-</div>
          <div className="percent">%</div>
          <div className="seven">7</div>
          <div className="eight">8</div>
          <div className="nine">9</div>
          <div className="four">4</div>
          <div className="five">5</div>
          <div className="six">6</div>
          <div className="one">1</div>
          <div className="two">2</div>
          <div className="three">3</div>
          <div className="zero">0</div>
          <div className="dot">.</div>
        </div>
        <div className="operators">
          <div className="divide">/</div>
          <div className="multiply">*</div>
          <div className="add">+</div>
          <div className="substruct">-</div>
          <div className="equal">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
