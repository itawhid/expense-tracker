import "./ExpenseItem.css";

function ExpenseItem(props) {
  console.log(props);

  return (
    <div className="expense-item">
      <div>
        <div>{props.month}</div>
        <div>{props.day}</div>
        <div>{props.year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;