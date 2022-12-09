import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].amount}
        month={expenses[0].date.toLocaleString("en-US", { month: "long" })}
        day={expenses[0].date.toLocaleString("en-US", { day: "2-digit" })}
        year={expenses[0].date.getFullYear()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].amount}
        month={expenses[1].date.toLocaleString("en-US", { month: "long" })}
        day={expenses[1].date.toLocaleString("en-US", { day: "2-digit" })}
        year={expenses[1].date.getFullYear()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].amount}
        month={expenses[2].date.toLocaleString("en-US", { month: "long" })}
        day={expenses[2].date.toLocaleString("en-US", { day: "2-digit" })}
        year={expenses[2].date.getFullYear()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].amount}
        month={expenses[3].date.toLocaleString("en-US", { month: "long" })}
        day={expenses[3].date.toLocaleString("en-US", { day: "2-digit" })}
        year={expenses[3].date.getFullYear()}
      ></ExpenseItem>
    </div>
  );
}

export default App;
