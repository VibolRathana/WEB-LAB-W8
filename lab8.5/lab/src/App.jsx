import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Toggle from "./components/Toggle";
import AsyncCounter from "./components/AsyncCounter";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/toggle" className="nav-link">Toggle</Link>
        <Link to="/asynccounter" className="nav-link">Async Counter</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/asynccounter" element={<AsyncCounter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}