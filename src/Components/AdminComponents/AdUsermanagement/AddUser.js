import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addUsersFromServer } from '../../../../src//Slice/userslice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import UserTable from "../../../../src/Components/AdminComponents/AdUsermanagement/UserTable";
import {Row,Container} from 'react-bootstrap';

function AddUserModel() {
  const dispatch = useDispatch();

  const [useruid, setuseruid] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const [usertype, setusertype] = useState('');
  const [phonenumber, setphonenumber] = useState('');

  const [show, setShow] = useState(false);

  const [userUidError, setUserUidError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userTypeError, setUserTypeError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    const phoneRegex = /^[8 9]\d{9}$/;
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

    dispatch(addUsersFromServer({ useruid, username, email, Password, usertype, phonenumber }));

    // Clear form fields after submission
    setuseruid('');
    setusername('');
    setemail('');
    setpassword('');
    setusertype('');
    setphonenumber('');

    // Close the modal after successful submission
    setShow(false);
  };

  const { usersList, error } = useSelector((state) => state.users);

  return (
    <>
      <Row className='mrg-left'>
            <div className='mb-5 d-flex justify-content-between p-3'>
              <div>
                <h3>User Management</h3>
              </div>
              <div>
                <Button variant="success" onClick={handleShow}>
                  Add User
                </Button>
              </div>
            </div>
            <Container className="ms-start">
              <UserTable />
              <div>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>User Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>User ID:</Form.Label>
                        <Form.Control type="text" placeholder="Enter User ID"
                          value={useruid}
                          onChange={(e) => setuseruid(e.target.value)}
                          onBlur={validateUserUid} />
                        {userUidError && <p className="text-danger">{userUidError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name"
                          value={username}
                          onChange={(e) => setusername(e.target.value)}
                          onBlur={validateUserName} />
                        {userNameError && <p className="text-danger">{userNameError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          onBlur={validateEmail} />
                        {emailError && <p className="text-danger">{emailError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="text" placeholder="Password"
                          value={Password}
                          onChange={(e) => setpassword(e.target.value)}
                          onBlur={validatePassword} />
                        {passwordError && <p className="text-danger">{passwordError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>User Type:</Form.Label>
                        <Form.Control type="text" placeholder="Enter User type"
                          value={usertype}
                          onChange={(e) => setusertype(e.target.value)}
                          onBlur={validateUserType} />
                        {userTypeError && <p className="text-danger">{userTypeError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone number"
                          value={phonenumber}
                          onChange={(e) => setphonenumber(e.target.value)}
                          onBlur={validatePhoneNumber} />
                        {phoneNumberError && <p className="text-danger">{phoneNumberError}</p>}
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={validateSubmit}>Add User</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Container>
          </Row>
    </>
  ); 
}

export default AddUserModel;



















