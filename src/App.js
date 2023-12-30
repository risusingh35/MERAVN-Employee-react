import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/page/login/Login';
import Role from '../src/page/role/Role';
import Home from '../src/page/home/Home';
import Dashboard from '../src/page/dashboard/Dashboard';
import Employee from '../src/page/employee/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/role' element={<Role />} />
          <Route path='/employee' element={<Employee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
