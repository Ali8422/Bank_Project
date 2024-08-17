import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function MyForm() {
  const [idType, setIdType] = useState("");

  const handleIdTypeChange = (e) => {
    setIdType(e.target.value);
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type="text" placeholder="Middle name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="123-456-7890" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="email@example.com" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridIdType">
          <Form.Label>Select ID Type</Form.Label>
          <Form.Select onChange={handleIdTypeChange} defaultValue="">
            <option value="" disabled>
              Choose...
            </option>
            <option value="aadhaar">Aadhaar</option>
            <option value="pan">PAN</option>
          </Form.Select>
        </Form.Group>
        {idType === "aadhaar" && (
          <Form.Group as={Col} controlId="formGridAadhaar">
            <Form.Label>Aadhaar Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Aadhaar number" />
          </Form.Group>
        )}

        {idType === "pan" && (
          <Form.Group as={Col} controlId="formGridPAN">
            <Form.Label>PAN Card Number</Form.Label>
            <Form.Control type="text" placeholder="Enter PAN card number" />
          </Form.Group>
        )}
      </Row>

      <Form.Check
        inline
        label="Male"
        name="gender"
        type="radio"
        id="inline-radio-male"
      />
      <Form.Check
        inline
        label="Female"
        name="gender"
        type="radio"
        id="inline-radio-female"
      />
      <Form.Check
        inline
        label="Other"
        name="gender"
        type="radio"
        id="inline-radio-other"
      />

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAccountType">
          <Form.Label>Account Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Checking</option>
            <option>Savings</option>
            <option>Business</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridInitialDeposit">
          <Form.Label>Initial Deposit</Form.Label>
          <Form.Control type="number" placeholder="Amount" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Control type="text" placeholder="Nationality" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;
