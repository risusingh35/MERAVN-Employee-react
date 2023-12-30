import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import { postData, fetchData } from '../../service/apiService';
import Pagination from '../../component/Pagination';
import ItemsPerPageDropdown from '../../component/ItemsPerPageDropdown';
import SearchComponent from '../../component/SearchComponent';
const Role = () => {
    const [rolesRes, setRoles] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPageCount, setPerPageCount] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const fetchRoles = async (page, perPage,searchTerm) => {
        try {
            await fetchData(`/role?page=${page}&perPage=${perPage}&searchTerm=${searchTerm}`).then((res) => {
                console.log('res-------', res);
                setRoles(res.roles);
                setTotalPages(res.totalPages);
            })

        } catch (error) {
            console.error('Error fetching roles:', error);
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
        fetchRoles(currentPage, perPageCount,searchTerm);
    }, [currentPage, perPageCount,searchTerm]);

    const handleEdit = (role) => {
        console.log('Editing role:', role);
    };

    const handleDelete = (roleid) => {
        console.log('Deleted user with ID:', roleid);
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
                        {/* <th>ID</th> */}
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rolesRes && rolesRes.map((role, index) => (
                        <tr key={role._id}>
                            <td>{index + 1}</td>
                            <td>{role.name}</td>
                            <td>{role.description}</td>
                            <td>{role.createdAt}</td>
                            <td>
                                <BsPencilSquare className="text-primary me-2" onClick={() => handleEdit(role)} />
                                <BsFillTrashFill className="text-danger" onClick={() => handleDelete(role._id)} />
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

export default Role;
