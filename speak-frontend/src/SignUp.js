import React, { Component } from 'react';
import './SignUp.css';
import { Grid, FormGroup, Col, Row, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class SignUp extends Component {
  
  render() {
    return (
      <div className="SignUp">
        <h1>Create an Account</h1>
        <Grid>
        <form>
            <Row className="name">
                <Col md={6} mdPush={6}>
                  <FieldGroup
                    id="formControlsLastName"
                    type="text"
                    label="Last Name"
                    placeholder="Enter your last name"
                  />
                </Col>
                <Col md={6} mdPull={6}>
                  <FieldGroup
                    id="formControlsFirstName"
                    type="text"
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                </Col>
            </Row>
            <Row className="schoolInfo">
                <Col md={6} mdPush={6}>
                  <FieldGroup
                    id="formControlsMajor"
                    label="Major"
                    type="major"
                    placeholder="Enter your academic major"
                  />
                </Col>
                <Col md={6} mdPull={6}>
                  <FieldGroup
                    id="formControlsUBIT"
                    label="UBIT"
                    type="UBIT"
                    placeholder="Enter your UBIT number"
                  />
                </Col>
            </Row>            
            <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email Address"
                placeholder="Enter email"
            />
            <FieldGroup
                id="formControlsPassword"
                label="Password"
                type="password"
            />
        
            <FieldGroup
                id="formControlsPassword"
                label="Confirm Password"
                type="password"
            />
          
          <Button type="submit">
            Submit
          </Button>
        </form>
        </Grid>
      </div>
    );
  }
}

export default SignUp;