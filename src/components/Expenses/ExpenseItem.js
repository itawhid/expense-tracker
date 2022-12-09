import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate month={props.month} day={props.day} year={props.year} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
