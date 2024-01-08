import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/page/login/Login';
import Role from '../src/page/role/Role';
import Home from '../src/page/home/Home';
import Dashboard from '../src/page/dashboard/Dashboard';
import Nav from '../src/page/nav/Nav';
import Employee from '../src/page/employee/Employee';
import AddEditEmployee from '../src/page/employee/addEditEmployee/AddEditEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './service/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav /> {/* Navigation component placed outside Routes */}
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="employee" element={<Employee />} />
            <Route path="add-edit-employee/:id" element={<AddEditEmployee />} />
            <Route path="role" element={<Role />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
