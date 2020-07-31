import React,{ createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { UpdateValues, RemoveTransaction, AddTransaction } from "./actions";

const INITIAL_STATE = {
    transactions: [
        // { id: 1, text: "Flower", amount: -20 },
        // { id: 2, text: "Salary", amount: 300 },
        // { id: 3, text: "Book", amount: -10 },
        // { id: 4, text: "Camera", amount: 150 },
    ],
    balance:0,
    income:0,
    expense:0,
    removeTransaction:()=>{},
    addTransaction:()=>{}
};

export const GlobalContext = createContext(INITIAL_STATE);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
    const {transactions, balance,income,expense}= state;
    const removeTransaction=(id)=> dispatch(RemoveTransaction(id));
    const addTransaction=(transaction)=> dispatch(AddTransaction(transaction));

    useEffect(()=>{
        const newBalance=transactions.reduce((total,transaction)=> total+=transaction.amount,0).toFixed(2);
        const newExpense=transactions
            .filter(transaction=>transaction.amount<0).reduce((total,transaction)=>total+=transaction.amount,0);
        const newIncome=transactions
            .filter(transaction=>transaction.amount>0).reduce((total,transaction)=>total+=transaction.amount,0);

        dispatch(UpdateValues({balance:+newBalance,expense:+newExpense,income:+newIncome}));
    },[transactions]);

    return (
        <GlobalContext.Provider value={{ transactions,balance,income,expense,removeTransaction,addTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
