import { AddExpenses, ListOutExpenses } from './actionType';
import Axios from 'axios';

export function listoutexpenses(){
    return function(dispacth){
        Axios.get('http://localhost:8080/api/expenses/explist').then(response=>{
            console.log(response)
        })
        return dispacth;
    }
}