import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator_container">
      <input id="entry" type="text" />
      <div className="number_container">
        <div className="AC">AC</div>
        <div className="pos_neg">+/-</div>
        <div className="%">%</div>
        <div className="7">7</div>
        <div className="8">8</div>
        <div className="9">9</div>
        <div className="4">4</div>
        <div className="5">5</div>
        <div className="6">6</div>
        <div className="1">1</div>
        <div className="2">2</div>
        <div className="3">3</div>
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

export default Calculator;
