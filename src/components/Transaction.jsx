import React from "react";

const Transaction = ({ amount, title, id, transactionEleminator }) => {
  const modifiedAmount = parseInt(amount);
  return (
    <li className={`${modifiedAmount < 0 ? "minus" : "plus"}`}>
      {title}{" "}
      <span>
        {modifiedAmount < 0 ? "-" : "+"}${Math.abs(modifiedAmount)}
      </span>
      <button className="delete-btn" onClick={() => transactionEleminator(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
