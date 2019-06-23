import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export const ExpenseForm = (props) => {
  console.log("props", props)
  const [ExpenseData, SetExpensesData]= useState({...props.expenseData});

  // Onchange Function
  const handlerInput = (event) => {
    // event.target.value;
   }

  // Form On Submit
  const submitForm = () => { }
  return (
    // 
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="exp_name" value={ExpenseData.name} onChange={handlerInput} placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Category</Label>
        <Col sm={10}>
          <Input type="text" name="exp_category" value={ExpenseData.type} onChange={handlerInput} placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Date</Label>
        <Col sm={10}>
          <Input type="date" name="exp_date" value={ExpenseData.date} onChange={handlerInput} placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Amount</Label>
        <Col sm={10}>
          <Input type="email" name="Exp_Amount" value={ExpenseData.value} onChange={handlerInput} placeholder="" />
        </Col>
      </FormGroup>
      <Button type="button" onClick={submitForm} color="dark">Submit</Button>
    </Form>
  )
}