import { Table, Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const [Apidata, setApiData] = useState([]);
  const setValue = (value) => {
    let { empId, firstName, lastName, age, checked } = value;
    localStorage.setItem("Id", empId);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Age", age);
    localStorage.setItem("Checkbox value", checked);
  };
  useEffect(() => {
    axios
      .get(`https://61b048ce3e2aba0017c496c6.mockapi.io/employeeData`)
      .then((response) => setApiData(response.data));
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`https://61b048ce3e2aba0017c496c6.mockapi.io/employeeData/${id}`)
      .then(() => getData());
  };

  const getData = () => {
    axios
      .get(`https://61b048ce3e2aba0017c496c6.mockapi.io/employeeData`)
      .then((response) => setApiData(response.data));
  };
  return (
    <div className="getter" style={{ marginTop: "20px" }}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Apidata.map((val) => {
            return (
              <Table.Row>
                <Table.Cell>{val.empId} </Table.Cell>
                <Table.Cell>{val.firstName}</Table.Cell>
                <Table.Cell>{val.lastName}</Table.Cell>
                <Table.Cell>{val.age}</Table.Cell>
                <Table.Cell>{val.checked ? "checked" : "unchecked"}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setValue(val)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => deleteData(val.empId)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
