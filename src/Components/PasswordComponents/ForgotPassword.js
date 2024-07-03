import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import Forgetpassword from '../../Assets/images/forgetpass.png'
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const clearEmailField = () => {
    setEmail('');
    setShowModal(true)
  };

  const submitForgotPasswordForm = () => {
    // Validate email format using regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    // Show modal
    setShowModal(true);

    // Clear email field when modal is hidden
    setShowModal(false);
    clearEmailField();
  };

  return (
    <div>
      {/* <div className='bg'><img src={Forgetpassword} alt=""></img></div> */}
    
    <div className="container margin text-white border border-secondary p-5 mt-5 fpcontainer ">
      <h2>Forgot Password</h2>
      <p>
        Enter your email address, and we'll send you instructions on how to
        reset your password.
      </p>

      {/* Forgot Password Form */}
      <Form
        className="mx-auto "
        onSubmit={(e) => {
          e.preventDefault();
          submitForgotPasswordForm();
        }}
      >
        <Form.Group>
          <Form.Label htmlFor="email">
            Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="email"  className='bg-transparent text-light'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          />
          <Form.Text className="text-danger">{emailError}</Form.Text>
        </Form.Group>

        <Button type="submit" className="btn btn-primary mt-4">
          Reset Password
        </Button>
      </Form>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className='modal-bg  text-light'>
          <Modal.Title>Check Your Email</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-bg  text-light'>
          Check your email for instructions on how to reset your password.
        </Modal.Body>
        <Modal.Footer className='modal-bg  text-light'>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}

export default ForgotPassword;