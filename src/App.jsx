import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import NewTransaction from "./components/NewTransaction";
import TotalBalance from "./components/TotalBalance";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <TotalBalance />
        <IncomeExpenses />
        <TransactionList />
        <NewTransaction />
      </div>
    </>
  );
}

export default App;
