import React, { useState } from "react";
import { addExpense } from "../api";

const AddExpenseForm = ({ setExpenses }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpense(description, amount)
      .then((response) => {
        if (response.ok) {
          setExpenses([...expenses, response.data]);
          setDescription("");
          setAmount("");
        } else {
          setError("An error occurred. Please try again later.");
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
