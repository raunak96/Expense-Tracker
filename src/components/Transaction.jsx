import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const Transaction = ({transaction:{amount,text,id}}) => {
    const sign= amount<0?'-':'+';
    const {removeTransaction}= useContext(GlobalContext);
    return (
        <>
            <li className={amount<0?"minus":"plus"}>
                {text} <span>{sign}<span>&#8377;</span>{Math.abs(amount)}</span>
                <button className="delete-btn" onClick={()=>removeTransaction(id)}>x</button>
            </li>
        </>
    );
};

export default Transaction;