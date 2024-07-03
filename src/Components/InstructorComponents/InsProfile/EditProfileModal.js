import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUserInServer } from '../../../../src/Slice/userslice';

const EditProfileModal = ({ show, handleClose, user }) => {
  const { selectedUser } = useSelector((state) => state.users);

  const [useruid, setuseruid] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const [usertype, setusertype] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const [userUidError, setUserUidError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userTypeError, setUserTypeError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateUserUid = () => {
    if (!useruid.trim()) {
      setUserUidError('User ID is required.');
    } else {
      setUserUidError('');
    }
  };

  const validateUserName = () => {
    if (!username.trim()) {
      setUserNameError('User Name is required.');
    } else {
      setUserNameError('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required.');
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!Password.trim()) {
      setPasswordError('Password is required.');
    } else {
      setPasswordError('');
    }
  };

  const validateUserType = () => {
    if (!usertype.trim()) {
      setUserTypeError('User Type is required.');
    } else {
      setUserTypeError('');
    }
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^\d{10}$/;
    if (!phonenumber.trim()) {
      setPhoneNumberError('Phone Number is required.');
    } else if (!phoneRegex.test(phonenumber)) {
      setPhoneNumberError('Invalid phone number.');
    } else {
      setPhoneNumberError('');
    }
  };

  const validateSubmit = (e) => {
    e.preventDefault();

    validateUserUid();
    validateUserName();
    validateEmail();
    validatePassword();
    validateUserType();
    validatePhoneNumber();

    if (userUidError || userNameError || emailError || passwordError || userTypeError || phoneNumberError) {
      return;
    }

    if (!useruid.trim() || !username.trim() || !email.trim() || !Password.trim() || !usertype.trim() || !phonenumber.trim()) {
      return;
    }
  };

  useEffect(() => {
    if (Object.keys(selectedUser).length !== 0) {
      setuseruid(selectedUser.useruid);
      setusername(selectedUser.username);
      setemail(selectedUser.email);
      setpassword(selectedUser.Password);
      setusertype(selectedUser.usertype);
      setphonenumber(selectedUser.phonenumber);
      setId(selectedUser.id);
    }
  }, [selectedUser]);

  const updateUser = () => {
    handleClose();
    dispatch(UpdateUserInServer({ id, useruid, username, email, Password, usertype, phonenumber }));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User ID:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User ID"
              value={useruid}
              onChange={(e) => setuseruid(e.target.value)}
              onBlur={validateUserUid}
            />
            {userUidError && <p className="text-danger">{userUidError}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User Name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              onBlur={validateUserName}
            />
            {userNameError && <p className="text-danger">{userNameError}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onBlur={validateEmail}
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Password"
              value={Password}
              onChange={(e) => setpassword(e.target.value)}
              onBlur={validatePassword}
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Type:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User type"
              value={usertype}
              onChange={(e) => setusertype(e.target.value)}
              onBlur={validateUserType}
            />
            {userTypeError && <p className="text-danger">{userTypeError}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone number"
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
              onBlur={validatePhoneNumber}
            />
            {phoneNumberError && <p className="text-danger">{phoneNumberError}</p>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={updateUser}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;


