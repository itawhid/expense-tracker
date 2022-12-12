import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].amount}
        month={props.items[0].date.toLocaleString("en-US", { month: "long" })}
        day={props.items[0].date.toLocaleString("en-US", { day: "2-digit" })}
        year={props.items[0].date.getFullYear()}
      />
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].amount}
        month={props.items[1].date.toLocaleString("en-US", { month: "long" })}
        day={props.items[1].date.toLocaleString("en-US", { day: "2-digit" })}
        year={props.items[1].date.getFullYear()}
      />
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].amount}
        month={props.items[2].date.toLocaleString("en-US", { month: "long" })}
        day={props.items[2].date.toLocaleString("en-US", { day: "2-digit" })}
        year={props.items[2].date.getFullYear()}
      />
      <ExpenseItem
        title={props.items[3].title}
        price={props.items[3].amount}
        month={props.items[3].date.toLocaleString("en-US", { month: "long" })}
        day={props.items[3].date.toLocaleString("en-US", { day: "2-digit" })}
        year={props.items[3].date.getFullYear()}
      />
    </Card>
  );
};

export default Expenses;
