# Bank App Frontend

This is the **Frontend** of a **Banking Application** built with **Next** and **TypeScript**. The app allows users to manage their accounts, deposit, withdraw, transfer money to IBAN accounts, and view their account statement.

🚀 **Live Demo**: [Click Me](https://bank-app-frontend-omega.vercel.app/)

## Features

- **Responsive Design**: The app is responsive and works on devices with a minimum width of 360px.
- **Deposit and Withdraw**: Users can deposit and withdraw money from their account.
- **Transfer Money to IBAN**: Users can transfer money only to IBAN accounts. The app ensures only valid IBAN accounts are used.
- **Account Statement**: Displays a list of transactions (amount, balance, type, ID, date), sorted by date, with the most recent first.

## Requirements

- **Responsive UI**: The application supports devices with a minimum width of 360px.
- **No User Authentication**: No authentication required for the user to use the app.
- **Deposit and Withdraw**: Users can deposit and withdraw money from their bank account.
- **Transfer Money**: Users can send money to an **IBAN account**.
- **Account Statement**: View account transactions (date, amount, balance), sorted by the most recent date.
- **IBAN Validation**: The app prevents users from sending money to non-IBAN accounts.

## Getting Started

### 1. Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/coder-artisan0719/bank-app-server.git
```

### 2. Start Project

```bash
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:4001](http://localhost:4001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
