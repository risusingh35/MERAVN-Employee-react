import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import { postData, fetchData } from '../../service/apiService';
import Pagination from '../../component/Pagination';
import ItemsPerPageDropdown from '../../component/ItemsPerPageDropdown';
import SearchComponent from '../../component/SearchComponent';
const Employee = () => {
    const [employeesRes, setEmployees] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPageCount, setPerPageCount] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const fetchEmployees = async (page, perPage,searchTerm) => {
        try {
            await fetchData(`/employee?page=${page}&perPage=${perPage}&searchTerm=${searchTerm}`).then((res) => {
                console.log('res-------', res);
                setEmployees(res.employee);
                setTotalPages(res.totalPages);
            })

        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };
    const handleSearch = (searchTerm) => {
        if (searchTerm.length>2) {
            setSearchTerm(searchTerm)
        } else   if (searchTerm.length<1) {
            setSearchTerm(searchTerm)  
        }
        
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleItemsPerPageChange = (itemperpage) => {
        setPerPageCount(itemperpage)
        setCurrentPage(1); // Reset to the first page when changing items per page
    };
    useEffect(() => {
        fetchEmployees(currentPage, perPageCount,searchTerm);
    }, [currentPage, perPageCount,searchTerm]);

    const handleEdit = (employee) => {
        console.log('Editing employee:', employee);
    };

    const handleDelete = (employeeid) => {
        console.log('Deleted user with ID:', employeeid);
    };
    return (
        <div className="mt-5">
            {/* Items per page dropdown and Search*/}
            <div className='d-flex searchAndItemCount' >
                <SearchComponent onSearch={handleSearch} />
                <ItemsPerPageDropdown
                    itemsPerPage={perPageCount}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesRes && employeesRes.map((employee, index) => (
                        <tr key={employee._id}>
                            <td>{index + 1}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.role}</td>
                            <td>
                                <BsPencilSquare className="text-primary me-2" onClick={() => handleEdit(employee)} />
                                <BsFillTrashFill className="text-danger" onClick={() => handleDelete(employee._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Employee;
