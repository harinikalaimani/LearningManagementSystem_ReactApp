import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Nav, Image, Modal, Container } from 'react-bootstrap';
import Page_heading from '../Page-heading';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersFromServer } from '../../../Slice/userslice';
import EditProfileModal from '../../../../src/Components/StudentsComponents/Profile/EditProfileModal';

function StProfile() {
  const { usersList } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(getUsersFromServer());
  }, [dispatch]);

  const handleEditProfile = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Only rendering details for the first user
  const user = usersList && usersList.length > 0 ? usersList[0] : null;

  return (
    <div>
      {user && (
          <Row className="mrg-left">
            <div>
              <Page_heading pageheading="Profile" />
            </div>
            <Container className="ms-start">
              <Col className="emp-profile">
                <form method="post">
                  <Row className="container">
                    <Col md={6}>
                      <div className="profile-head">
                        <h5>{user.username}</h5>
                        <h6>{user.usertype}</h6>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <Nav.Item>
                            <Nav.Link
                              className="nav-link active mt-5"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              About
                            </Nav.Link>
                          </Nav.Item>
                        </ul>
                      </div>
                    </Col>
                    <Col xl={2} md={4}>
                      <Button variant="outline-success" className="mx-1" onClick={() => handleEditProfile(user)}>
                        Edit Profile
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <div className="tab-content profile-tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="col-md-6">
                            <p style={{ color: '#000' }}>Personal Information</p>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label>User Id</label>
                            </div>
                            <div className="col-md-6">
                              <p id="displayUserId">{user.useruid}</p>
                            </div>
                            <div className="col-md-6">
                              <label>Name</label>
                            </div>
                            <div className="col-md-6">
                              <p id="displayName">{user.username}</p>
                            </div>
                            <div className="col-md-6">
                              <label>Email</label>
                            </div>
                            <div className="col-md-6">
                              <p id="displayEmail">{user.email}</p>
                            </div>
                            <div className="col-md-6">
                              <label>Phone</label>
                            </div>
                            <div className="col-md-6">
                              <p id="displayPhone">{user.phonenumber}</p>
                            </div>
                            <div className="col-md-6">
                              <label>Profession</label>
                            </div>
                            <div className="col-md-6">
                              <p id="displayProfession">{user.usertype}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Container>
          </Row>
      )}
      {/* Render the EditProfileModal component */}
      <EditProfileModal show={showModal} handleClose={handleCloseModal} user={selectedUser} />
    </div>
  );
}

export default StProfile;
