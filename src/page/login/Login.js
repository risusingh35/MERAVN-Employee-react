import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'; // Import eye icons
import { postData, fetchData } from '../../service/apiService';
import {setTokenLocStore} from '../../service/localStorage'
import {
  setAccessToken
} from '../../redux/features/tokenstore/tokenSlice';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    await logiInUser({ email: username, password: password });
  };
  const logiInUser = async (loginData) => {
    try {
      const result = await postData('/login', loginData);
      if (!result.token) {
        toast.error(`Error:${result?.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.success(`User logged in`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setData(result);
        if (result?.token) {
          setTokenLocStore(result.token)
          dispatch(setAccessToken(result.token))
          navigate('/dashboard');
        }
      }

    } catch (error) {
      console.error('Error fetching data:', error);

    }
  };
  const isLoginDisabled = !username || !password;

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-8 col-sm-12 card p-4 pt-2">
          <form onSubmit={handleLogin} >
            <h2 className="mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                disabled={isLoginDisabled}
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
