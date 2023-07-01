export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            console.log('case TRANSACTION');
            console.log(action.payload)
            const temp_transactions = state.transactions.filter(transaction => transaction.id !== action.payload)
            console.log('case me transactions: ', temp_transactions)
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            console.log('case default');
            return state;
    }
}
