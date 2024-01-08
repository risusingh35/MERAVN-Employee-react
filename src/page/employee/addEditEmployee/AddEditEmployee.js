import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { postData, fetchData } from '../../../service/apiService';
import { useParams ,useNavigate} from 'react-router-dom';
const AddEditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false); 
  console.log('id',id);
  const [employeeData, setEmployeeData] = useState({
    // Initialize employee data structure as needed
    name: '',
    email: '',
    role: '',
    // Add other fields if necessary
  });

// To track if it's editing or adding
  // Other state variables and functions as needed...

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add logic here to submit the form data
      if (isEditing) {
        // Perform update operation
        await postData('/employee/update', employeeData);
        toast.success('Employee updated successfully!');
      } else {
        // Perform add operation
        await postData('/employee/add', employeeData);
        toast.success('Employee added successfully!');
      }
      // Reset form fields or perform other necessary actions after submission
      setEmployeeData({ name: '', email: '', role: '' }); // Resetting form fields for example
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again.');
    }
  };

  // Other useEffect, functions, and JSX elements...

  return (
    <div className="mt-5">
      {/* Your form for adding/editing employees */}
      <form onSubmit={handleSubmit}>
        {/* Example input fields for name, email, and role */}
        <input
          type="text"
          value={employeeData.name}
          onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          value={employeeData.email}
          onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="text"
          value={employeeData.role}
          onChange={(e) => setEmployeeData({ ...employeeData, role: e.target.value })}
          placeholder="Role"
        />
        {/* Add other input fields or form elements as needed */}
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>

      {/* Other elements for displaying feedback, etc. */}
      <ToastContainer />
    </div>
  );
};

export default AddEditEmployee;
