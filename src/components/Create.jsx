import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    axios
      .post("https://61b048ce3e2aba0017c496c6.mockapi.io/employeeData", {
        firstName,
        lastName,
        age,
        checked: checkbox
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
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Age</label>
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
