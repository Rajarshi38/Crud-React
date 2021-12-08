import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Button, Checkbox } from "semantic-ui-react";
const Update = () => {
  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();
  useState(() => {
    setId(localStorage.getItem("Id"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setAge(localStorage.getItem("Age"));

    setCheckbox(localStorage.getItem("Checkbox value"));
  });

  const updateData = () => {
    axios
      .put(`https://61b048ce3e2aba0017c496c6.mockapi.io/employeeData/${id}`, {
        firstName,
        lastName,
        age,
        checkbox
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Age</label>
        <input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={updateData}>
        Update
      </Button>
    </Form>
  );
};

export default Update;
