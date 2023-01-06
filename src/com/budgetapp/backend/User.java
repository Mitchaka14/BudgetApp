package com.budgetapp.backend;

import java.util.ArrayList;
import java.util.List;

public class User {
    private int id;
    private String username;
    private String password;
    private String name;
    private String email;
    private List<Income> income;
    private List<Expense> expenses;

    public User(int id, String username, String password, String name, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.income = new ArrayList<>();
        this.expenses = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public List<Income> getIncome() {
        return income;
    }

    public List<Expense> getExpenses() {
        return expenses;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void addIncome(Income income) {
        this.income.add(income);
    }

    public void addExpense(Expense expense) {
        this.expenses.add(expense);
    }

    public void removeIncome(Income income) {
        this.income.remove(income);
    }

    public void removeExpense(Expense expense) {
        this.expenses.remove(expense);
    }
}
