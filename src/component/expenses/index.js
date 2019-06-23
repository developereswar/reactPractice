import React from 'react';
import { Table, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

import { ExpenseForm } from './expenseForm';

class ExpenseApp extends React.Component {
  state = {
    viewInputlists: [],
    XList: []
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData = () => {
  
  }

  handlerInput = (e) => {
    console.log(e.target.name)
    const { viewInputlists } = this.state;
    let key = e.target.name;
    viewInputlists[key] = e.target.value;
    console.log(viewInputlists)
    this.setState({ viewInputlists })
  }

  addList = () => {
    const { XList, viewInputlists } = this.state;
    console.log()
    // expenses.push(viewInputlists);
    // console.log(expenses)
  }
  render() {
    console.log(this.state)
    const { viewInputlists } = this.state;
    return (
      <div className="appMain">
        <h1> Expenses </h1>

        <ExpenseForm expenseData={viewInputlists} />
        <hr />

        <Table dark bordered>
          <tr>
            <th>
              Name
                              </th>
            <th>
              Category
                              </th>
            <th>
              Date
                              </th>
            <th>
              Amount
                              </th>
          </tr>

          {this.state.viewInputlists.map((data, i) => {
            return (
              <tr key={i}> <td> {data.exp_name} </td> <td> {data.type} </td> <td> {data.exp_date} </td>  <td> {data.exp_value} </td>   </tr>
            )
          })}

        </Table>


      </div>
    )
  }
}

export default ExpenseApp;