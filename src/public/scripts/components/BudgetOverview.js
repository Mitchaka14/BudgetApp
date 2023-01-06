import React, { useState, useEffect } from "react";
import { getIncomes, getExpenses } from "../api";
import Navigation from "./Navigation";
import AddIncome from "./AddIncome";
import AddExpense from "./AddExpense";

const BudgetOverview = ({ isAuthenticated, setIsAuthenticated }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomesResponse = await getIncomes();
        const expensesResponse = await getExpenses();
        if (incomesResponse.ok && expensesResponse.ok) {
          setIncomes(incomesResponse.data);
          setExpenses(expensesResponse.data);
          setTotalIncome(
            incomesResponse.data.reduce((acc, income) => acc + income.amount, 0)
          );
          setTotalExpenses(
            expensesResponse.data.reduce(
              (acc, expense) => acc + expense.amount,
              0
            )
          );
        } else {
          setError("An error occurred. Please try again later.");
        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navigation setIsAuthenticated={setIsAuthenticated} />
      <h1>Budget Overview</h1>
      {error && <div className="error">{error}</div>}
      <div className="income">
        <h2>Income</h2>
        <ul>
        ...
          {incomes.map((income) => (
            <li key={income._id}>
              {income.description}: {income.amount}
            </li>
          ))}
        </ul>
        <AddIncome setIncomes={setIncomes} />
        <p>Total: {totalIncome}</p>
      </div>
      <div className="expenses">
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense._id}>
              {expense.description}: {expense.amount}
            </li>
          ))}
        </ul>
        <AddExpense setExpenses={setExpenses} />
        <p>Total: {totalExpenses}</p>
        <p>Remaining: {totalIncome - totalExpenses}</p>
      </div>
    </div>
  );
};

export default BudgetOverview;

           
