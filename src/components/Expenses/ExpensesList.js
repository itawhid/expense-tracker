import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.amount}
          month={expense.date.toLocaleString("en-US", { month: "long" })}
          day={expense.date.toLocaleString("en-US", { day: "2-digit" })}
          year={expense.date.getFullYear()}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
