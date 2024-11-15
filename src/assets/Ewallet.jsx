import React, { useRef, useState } from "react";

export default function Ewallet() {
  const [Balance, setBalance] = useState(0);
  const [transactions, settransactions] = useState([]);
  const amountInput = useRef();
  const Deposit = () => {
    let amount = +amountInput.current.value;

    let obj = {
      beforeBalance: 1000,
      type: "Deposit",
      amount: amount,
      afterBalance: Balance + amount,
    };
    transactions.push(obj);
    console.log(transactions);

    setBalance(Balance + amount);
  };

  const widthdrow = () => {
    let amount = +amountInput.current.value;

    let obj = {
      beforeBalance: 1000,
      type: "widthdrow",
      amount: amount,
      afterBalance: Balance - amount,
    };
    transactions.push(obj);
    console.log(transactions);

    setBalance(Balance - amount);
  };

  return (

    // <div className='col-12 d-flex flex-wrap'>
    //     <h1>Balance :{Balance}</h1>
    //     <input type="text" placeholder='Enter Amount' />
    //     <button className='btn btn-danger' onClick={()=>{
    //              let Amount =document.querySelector("input").value;
    //              if (Balance>=Amount) {
    //                 setBalance (Balance - Amount)
    //              }else{
    //                 alert('ممعكش فلوس')
    //              }

    //     }}>widthdrow</button>
    //     <button className='btn btn-success' onClick={()=>{
    //          let Amount =document.querySelector("input").value;
    //         setBalance (Balance + +  Amount)}}>Deposit</button>
    // </div>
    <div>
      <h1>Balance:{Balance}</h1>
      <input ref={amountInput} placeholder="Enter Amount" />
      <button
        onClick={() => {
          Deposit();
        }}
      >
        ايداع
      </button>
      <button onClick={widthdrow}> سحب </button>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>-</th>
            <th>Balance before</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance After</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((el, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{el.afterBalance}</th>
                <th>{el.type}</th>
                <th>{el.amount}</th>
                <th>{el.afterBalance}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
