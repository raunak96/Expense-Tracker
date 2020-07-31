export const UpdateValues=(values)=>({
    type:'UPDATE_VALUES',
    payload:values
});

export const RemoveTransaction=(id)=>({
    type: 'REMOVE_TRANSACTION',
    payload: id
});

export const AddTransaction=(transaction)=>({
    type: 'ADD_TRANSACTION',
    payload: transaction
});