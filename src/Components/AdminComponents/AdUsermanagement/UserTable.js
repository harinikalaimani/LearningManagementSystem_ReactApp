import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button, Modal } from 'react-bootstrap';
import MyVerticallyCenteredModal from './UpdateUser';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUsersInServer, getUsersFromServer, removeUserFromList, setSelectedTask } from '../../../../src/Slice/userslice';

function UserTable() {
    const { usersList } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [deleteModalShow, setDeleteModalShow] = useState(false);

    useEffect(() =>{
            dispatch(getUsersFromServer())
         },[dispatch] )

    const updateUser = (user) => {
        dispatch(setSelectedTask(user));
        setModalShow(true);
    };

    const confirmDelete = (user) => {
        setSelectedUser(user);
        setDeleteModalShow(true);
    };

    const deleteUser = () => {
        if (selectedUser) {
            dispatch(deleteUsersInServer(selectedUser)).unwrap()
                .then(() => {
                    dispatch(removeUserFromList(selectedUser));
                    setDeleteModalShow(false);
                });
        }
    };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User ID</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>User Type</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList && usersList.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.useruid}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.Password}</td>
                            <td>{user.usertype}</td>
                            <td>{user.phonenumber}</td>
                            <td>
                                <Button variant="outline-success" className='mx-1' onClick={() => updateUser(user)}>
                                    <FaEdit style={{ fontSize: "20px" }} />
                                </Button>
                                <Button variant="outline-success" className='mx-1' onClick={() => confirmDelete(user)}>
                                    <MdDelete style={{ fontSize: "20px" }} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Delete confirmation modal */}
            <Modal show={deleteModalShow} onHide={() => setDeleteModalShow(false)}
            className="bg-dark"
            backdropClassName="modal-background">
                <div className='modal-content bg-dark text-white'>
                <Modal.Header closeButton className='modal-content bg-dark text-white border-0'>
                    <Modal.Title style={{ color: 'white' }}> Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                   {`Are you sure you want to delete this user?`}
                </Modal.Body>
                <Modal.Footer className="bg-   border-0">
                    <Button variant="secondary" onClick={() => setDeleteModalShow(false)}>Cancel</Button>
                    <Button variant="danger" onClick={deleteUser}>Delete</Button>
                </Modal.Footer>
                </div>
            </Modal>

            {/* Update user modal */}
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default UserTable;
