import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Starter = () => {
  return (
    <div className="starter">
      <Link to="/create">
        <Button>Create Employee</Button>
      </Link>
      <Link to="/read">
        <Button>Get all Employees</Button>
      </Link>
      <Link to="/update">
        <Button>Update employee</Button>
      </Link>
    </div>
  );
};

export default Starter;
