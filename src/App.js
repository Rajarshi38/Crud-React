import Home from "./components/Home";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Starter from "./components/Starter";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/" element={<Starter />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}
