import React from "react";
import { useTrackerContext } from "../context/TrackerContext";

const NewTransaction = () => {
  const { transaction, setTransaction, setTransactionList } =
    useTrackerContext();

  const inputHandler = (e) => {
    setTransaction((prevTransaction) => {
      return {
        ...prevTransaction,
        [e.target.name]: e.target.value,
        id: Date.now(),
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (transaction.title !== "" && transaction.amount !== "") {
      setTransactionList((prevList) => {
        return [...prevList, transaction];
      });
    }
    setTransaction({ title: "", amount: "" });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            name="title"
            onChange={inputHandler}
            value={transaction.title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            name="amount"
            onChange={inputHandler}
            value={transaction.amount}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default NewTransaction;
