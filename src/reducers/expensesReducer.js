import { ListOutExpenses } from '../actions/actionType';

export default function rootReducer(state=null, action) {
    switch (action) {
        case ListOutExpenses:
            return action.payload
            break;
        default:
            return state;
    }
}