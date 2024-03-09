import React from "react";
import { useTrackerContext } from "../context/TrackerContext";

const IncomeExpenses = () => {
  const { amounts } = useTrackerContext();
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
