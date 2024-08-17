import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import newAccountJson from '../data/newAccount.json';
// import { appendDataToFile} from "../utils/saveNewAccountData";

function AccountOpeningForm() {
  const [idType, setIdType] = useState("");
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    fistName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    id: { idType: "", idValue: "" },
    gender: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    accountType: '',
    initialDeposit: '',
    nationality: '',
    term: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIdTypeChange = (e) => {
    const idType = e.target.value;
    setIdType(idType);
    setFormData({
      ...formData,
      id: { ...formData.id, idType: idType, idValue: "" },
    });
  };

  const handleIdValueChange = (e) => {
    setFormData({
      ...formData,
      id: { ...formData.id, idValue: e.target.value },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Convert formData to JSON and create a Blob
      const dataStr = JSON.stringify(formData, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      // Create a link element and simulate a click to download the file
      const link = document.createElement('a');
      link.href = url;
      link.download = 'formData.json';
      link.click();
      
      // Clean up the URL object
      URL.revokeObjectURL(url);

      console.log('Form Data saved as a file:', formData);
    }

    setValidated(true);
  };


  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            name="fistName"
            value={formData.fistName}
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            name="middleName"
            value={formData.middleName}
            type="text"
            placeholder="Middle Name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your last name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            required
            name="dateOfBirth"
            value={formData.dateOfBirth}
            type="date"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your date of birth.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            name="phoneNumber"
            value={formData.phoneNumber}
            type="tel"
            placeholder="123-456-7890"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            name="email"
            value={formData.email}
            type="email"
            placeholder="email@example.com"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="formGridIdType">
          <Form.Label>Select ID Type</Form.Label>
          <Form.Select onChange={handleIdTypeChange} value={idType} required>
            <option value="" disabled>
              Choose...
            </option>
            <option value="aadhaar">Aadhaar</option>
            <option value="pan">PAN</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select an ID type.
          </Form.Control.Feedback>
        </Form.Group>
        {idType === "aadhaar" && (
          <Form.Group as={Col} md="4" controlId="formGridAadhaar">
            <Form.Label>Aadhaar Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Aadhaar number"
              value={formData.id.idValue}
              onChange={handleIdValueChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your Aadhaar number.
            </Form.Control.Feedback>
          </Form.Group>
        )}

        {idType === "pan" && (
          <Form.Group as={Col} md="4" controlId="formGridPAN">
            <Form.Label>PAN Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter PAN card number"
              value={formData.id.idValue}
              onChange={handleIdValueChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide your PAN card number.
            </Form.Control.Feedback>
          </Form.Group>
        )}
      </Row>

      <Row className="mb-4">
        <Form.Group as={Col} md="4" controlId="formGridGender">
          <Form.Label>Choose Gender</Form.Label>
          <Form.Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select your gender.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            value={formData.address}
            placeholder="1234 Main St"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            name="address2"
            value={formData.address2}
            placeholder="Apartment, studio, or floor"
            onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select your state.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your zip code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAccountType">
          <Form.Label>Account Type</Form.Label>
          <Form.Select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="business">Business</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select an account type.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridInitialDeposit">
          <Form.Label>Initial Deposit</Form.Label>
          <Form.Control
            name="initialDeposit"
            value={formData.initialDeposit}
            type="number"
            placeholder="Amount"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide an initial deposit amount.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNationality">
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            name="nationality"
            value={formData.nationality}
            type="text"
            placeholder="Nationality"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your nationality.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check
          name="term"
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={formData.term}
          onChange={(e) => setFormData({ ...formData, term: e.target.checked })}
          required
        />
        <Form.Control.Feedback type="invalid">
          You must agree to the terms and conditions.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AccountOpeningForm;
