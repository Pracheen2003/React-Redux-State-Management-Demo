<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
>>>>>>> fc51edf7ba6a0a5b9dc896c5827a0d7497abc2ce
