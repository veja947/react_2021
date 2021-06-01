
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";


function App() {

    const expenses = [
        {
            date: new Date(2021, 2, 28),
            title: 'Car Insurance',
            amount: 299.99,
        },
        {
            date: new Date(2021, 3, 28),
            title: 'Home Insurance',
            amount: 99.99,
        },
        {
            date: new Date(2021, 4, 28),
            title: 'Mortgage',
            amount: 699.99,
        }
    ];

  return (
    <div>
      <h2>Let's get started!</h2>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
