import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/expensesReducer'
export const store = createStore(rootReducer, applyMiddleware(thunk));
