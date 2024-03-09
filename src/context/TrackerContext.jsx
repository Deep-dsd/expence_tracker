import { createContext, useContext, useState } from "react";

const contextcreator = createContext();

import React from "react";

const TrackerContext = ({ children }) => {
  const [transaction, setTransaction] = useState({ title: "", amount: "" });

  const [transactionList, setTransactionList] = useState([]);

  const amounts = transactionList.map((transaction) => {
    return parseInt(transaction.amount);
  });

  return (
    <contextcreator.Provider
      value={{
        transaction,
        setTransaction,
        transactionList,
        setTransactionList,
        amounts,
      }}
    >
      {children}
    </contextcreator.Provider>
  );
};

export const useTrackerContext = () => {
  return useContext(contextcreator);
};

export { TrackerContext };
