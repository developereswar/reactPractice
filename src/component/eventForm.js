import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class EventForm extends Component {
  render() {
    return (
      <div className="appMain">
        <Container-fluid>
          <Row>
             <Col md={12}>
             <h2>Event  </h2>
             </Col>
            <Col sm={10} md={10} xs={12}>
              <Form className>
                <FormGroup row>
                  <Label for="" sm={2}>Email</Label>
                  <Col sm={10}> <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" /> </Col>
                </FormGroup>
               
              </Form>
            </Col>
          </Row>
        </Container-fluid>
      </div>
    )
  }
}

export default EventForm;