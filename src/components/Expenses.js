import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem date={props.items[0].date}
                         title={props.items[0].title}
                         amount={props.items[0].amount} />
            <ExpenseItem date={props.items[1].date}
                         title={props.items[1].title}
                         amount={props.items[1].amount} />
            <ExpenseItem date={props.items[2].date}
                         title={props.items[2].title}
                         amount={props.items[2].amount} />
        </Card>
    )
}

export default Expenses;