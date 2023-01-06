import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Budget Overview</Link>
      <Link to="/add-income">Add Income</Link>
      <Link to="/add-expense">Add Expense</Link>
    </nav>
  );
};

export default Navigation;
