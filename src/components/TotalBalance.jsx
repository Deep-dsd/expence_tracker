import React from "react";
import { useTrackerContext } from "../context/TrackerContext";

const TotalBalance = () => {
  const { amounts } = useTrackerContext();

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {total < 0 && "-"}${Math.abs(total).toFixed(2)}
      </h1>
    </>
  );
};

export default TotalBalance;
