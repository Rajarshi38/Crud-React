import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link
        to="/"
        style={{
          textDecoration: "none"
        }}
      >
        <h1 className="main-header">React Crud Operations</h1>
      </Link>
    </div>
  );
};
export default Home;
