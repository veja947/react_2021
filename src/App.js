
import ExpenseItem from "./components/ExpenseItem";


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
        <ExpenseItem date={expenses[0].date}
                     title={expenses[0].title}
                     amount={expenses[0].amount}></ExpenseItem>
        <ExpenseItem date={expenses[1].date}
                     title={expenses[1].title}
                     amount={expenses[1].amount}></ExpenseItem>
        <ExpenseItem date={expenses[2].date}
                     title={expenses[2].title}
                     amount={expenses[2].amount}></ExpenseItem>
    </div>
  );
}

export default App;
