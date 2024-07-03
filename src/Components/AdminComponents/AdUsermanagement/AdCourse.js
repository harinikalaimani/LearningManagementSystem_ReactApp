import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addUsersFromServer } from '../../../../src/Slice/userslice';
import { useDispatch } from 'react-redux';
import { Row,Container } from 'react-bootstrap';


function Addcourse() {
  const dispatch = useDispatch();

  const [coursename, setcoursename] = useState('');
  const [instructorname, setinstructorname] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const addUser = (e) => {
    e.preventDefault();
    console.log({ coursename, instructorname });
    dispatch(addUsersFromServer({ coursename, instructorname }));

    setcoursename('');
    setinstructorname('');

    // Close the modal
    setShow(false);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
          <Row className="mrg-left">
            <div className="mb-5 d-flex justify-content-between p-3">
              <div>
                <h3>Course Management</h3>
              </div>
              <div>
                <Button variant="primary" onClick={handleShow}>
                  Enroll course
                </Button>
              </div>
            </div>    
            <Container className=" ms-start">
              <div>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Course Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Course Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Course Name"
                          value={coursename}
                          onChange={(e) => setcoursename(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Instructor Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Instructor Name"
                          value={instructorname}
                          onChange={(e) => setinstructorname(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={(e) => addUser(e)}>
                      Enroll course
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Container>
          </Row>
    </>
  );
}

export default Addcourse;
