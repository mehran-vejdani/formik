import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Signin from "./components/signin";
import Login from "./components/login";

function App() {
  return (
    <div>
      <div className="App-logo">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
