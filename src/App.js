import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/page/login/Login';
import Role from '../src/page/role/Role';
import Home from '../src/page/home/Home';
import Dashboard from '../src/page/dashboard/Dashboard';
import Employee from '../src/page/employee/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './service/PrivateRoute'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" exact />
            <Route path='/' element={<Home />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/role' element={<Role />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
