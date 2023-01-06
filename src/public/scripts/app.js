import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import BudgetOverview from "./components/BudgetOverview";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Budget App</Link>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </header>
      <div className="container">
        <Route path="/" exact component={BudgetOverview} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add-income" component={AddIncome} />
        <Route path="/add-expense" component={AddExpense} />
      </div>
      <footer>&copy; Budget App</footer>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
