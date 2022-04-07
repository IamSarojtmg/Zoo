import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export const InputForm = props => {

    const {updateDetailsArray} = props;
    
    const initialInputState = { Species: "", Facts: "" };
   
    const [eachEntry, setEachEntry] = useState(initialInputState);

    const {Species, Facts} = eachEntry;
// If initialinputstate is eachEntry, than why are we defining each enter again?
      
    const handleInputChange = e => {
        setEachEntry({...eachEntry,[e.target.name]: e.target.value});
    };

    const handleFinalSubmit = e => {
        updateDetailsArray(eachEntry)
    };



  return (
  <div>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
        <h2>Add Animal</h2>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form>
          <FormGroup>
            <Label for="Species">Species</Label>
            <Input name="Species" 
            placeholder="What kind of animal is it?"
            onChange={handleInputChange}
            value={Species}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="Facts">Facts</Label>
            <Input name="Facts" 
            placeholder="Enter animal details"
            onChange={handleInputChange}
            value={Facts}
            ></Input>
          </FormGroup>
          <Button onClick={handleFinalSubmit}>Submit</Button>
        </Form>
      </Col>
    </Row>
  </div> 
  );
};

export default Input;