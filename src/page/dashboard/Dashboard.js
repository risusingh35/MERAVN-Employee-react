import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccessToken } from '../../redux/features/tokenstore/tokenSlice';

const Dashboard = () => {
  const token = useSelector(selectAccessToken);

  return (
    <div className="mt-5">
      <div className="col-lg-4 col-md-8 col-sm-12 p-4 pt-2">
      AccessToken: {token}
      </div>
    </div>
  );
};

export default Dashboard;
