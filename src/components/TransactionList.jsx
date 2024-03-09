import React from "react";
import { useTrackerContext } from "../context/TrackerContext";
import Transaction from "./Transaction";
const TransactionList = () => {
  const { transactionList, setTransactionList } = useTrackerContext();

  const transactionEleminator = (id) => {
    const updatedTransactionList = transactionList.filter(
      (item) => item.id !== id
    );
    setTransactionList(updatedTransactionList);
  };
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactionList.map((item) => {
          const { id } = item;
          return (
            <Transaction
              key={id}
              {...item}
              transactionEleminator={transactionEleminator}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TransactionList;
