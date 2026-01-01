# React-Redux-State-Management-Demo
This is a simple React application built to understand and demonstrate the core concepts of Redux state management. The app manages a user’s balance and allows adding or removing money using Redux actions and reducers.

## 🚀 Features
- Centralized state management using Redux
- Add money to user balance
- Remove money with validation to prevent negative balance
- Clean and simple reducer logic
- Beginner-friendly project structure

## 🛠️ Technologies Used
- React
- Redux
- JavaScript (ES6)
- CSS

## 🧩 Redux Implementation Overview
- Initial State: Stores user information such as username and balance
- Actions:  
  - addMoney – Adds amount to balance  
  - removeMoney – Deducts amount safely
- Reducer: Handles state updates based on dispatched actions
- Store: Created using Redux `createStore

- ## ▶️ How It Works
1. User clicks **Add Money** or **Remove Money**
2. Corresponding Redux action is dispatched
3. Reducer updates the state immutably
4. Updated balance is reflected in the UI
