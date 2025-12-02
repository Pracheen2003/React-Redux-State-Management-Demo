import {createStore} from 'redux';

//Initial state
const initialState = {
    user: {
        username: "Raj",
        balance: 25000
    }
}


//Action
export const addMoney = (amt) => ({
    type: 'addMoney',
    payload: amt
});

export const removeMoney = (amt) => ({
    type: "removeMoney",
    payload: amt,
});


//Reducer
function reducer(state = initialState, action) {
    switch(action.type){
        case "addMoney":
            return{
                user : {
                    username: state.user.username,
                    balance: state.user.balance + action.payload
                },
            };

            case "removeMoney":
//                 if (state.user.balance < action.payload) {
//                 return state; // not enough balance, no change
//   }
                return {
                    
                    user: {
                        username: state.user.username,
                        balance: Math.max(0, state.user.balance - action.payload),
                    },
                };
            default:
                return state
    }
}

const store = createStore(reducer);
export default store;