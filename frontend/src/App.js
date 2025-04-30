import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TODOPage from "./pages/TODOPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
    const [backend, setBackend] = useState('/api');

    function BackendSelector({ backend, setBackend }) {
      return (
        <div style={{ padding: 10 }}>
          <label>Choose backend:&nbsp;</label>
          <select value={backend} onChange={(e) => setBackend(e.target.value)}>
            <option value="/api">Load Balanced</option>
            <option value="/api1">Backend 1</option>
            <option value="/api2">Backend 2</option>
          </select>
        </div>
      );
    }
    
  return (
    <Router>
      <BackendSelector backend={backend} setBackend={setBackend} />
      <Routes>
      <Route path="/login" element={<LoginPage backend={backend}/>} />
        <Route path="/register" element={<RegisterPage backend={backend}/>} />
        <Route path="/tasks" element={<TODOPage backend={backend}/>} />
        <Route path="/" element={<LoginPage backend={backend}/>} /> {//Redirect to login by default
        }
      </Routes>
    </Router>
  );
}

export default App;
