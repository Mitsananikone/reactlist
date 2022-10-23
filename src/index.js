/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const ATMDeposit = ({onChange, handleSubmit}) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit" onClick={handleSubmit}></input>
      <h2 id="total">{status}</h2>
    </label>
  );
};

const Account = () => {
  console.log("AAAAAA")
  let transactionState = 0;
  let totalState = 0;
  let status = "Account Balance $zero";

  const handleChange = e => {
    console.log(`handleChange ${e.target.value}`)
    transactionState = Number(e.target.value);
  };

  const handleSubmit = (e) => {
    totalState += transactionState;
    status = `Account Balance $ ${totalState}`;
    document.getElementById("total").innerHTML = status;
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id='total'> Account Balance {status}</h2>
      <ATMDeposit onChange={handleChange}> Deposit </ATMDeposit>
      </form>
    );
  };

ReactDOM.render(<Account />, document.getElementById("root"));
