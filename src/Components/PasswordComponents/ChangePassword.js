import React, { useState } from 'react';
import logo from '../../../src/assets/images/logo.png';

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const validateCurrentPassword = () => {
    if (!formData.currentPassword.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        currentPassword: 'Current password is required'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        currentPassword: ''
      }));
    }
  };

  const validateNewPassword = () => {
    if (formData.newPassword.trim().length < 8) {
      setErrors(prevErrors => ({
        ...prevErrors,
        newPassword: 'New password must be at least 8 characters long'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        newPassword: ''
      }));
    }
  };

  const validateConfirmPassword = () => {
    if (formData.newPassword.trim() !== formData.confirmPassword.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        confirmPassword: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateCurrentPassword();
    validateNewPassword();
    validateConfirmPassword();
  
    // Checking errors are present before submitting the form
    const errorMessages = Object.values(errors);
    if (errorMessages.some(error => error)) {
      return;
    }
    // Form submission logic here
    console.log('Form submitted successfully');

    // Reset form fields to empty values
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <main>
      <div className="container mt-md-5 pt-5">
        <div className="container d-flex justify-content-center">
          <div className="card rounded-0 d-none d-lg-block bg-dark">
            <div className="card-body mt-5">
              <img src={logo} alt="" style={{width:"270px", height:"130px"}} className="pt-4 mt-5" />
              {/* <h3 className="text-white text-center mt-2">Learning Made Easy!</h3> */}
            </div>
          </div>
          <div className="card rounded-0 grid-bg px-3">
            <div className="card-body">
              <div className="px-5 py-3">
                <h4>Change Password</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">Current Password <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control border-secondary bg-transparent text-light"
                    id="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    onBlur={validateCurrentPassword}
                  />
                  <div className="text-danger error">{errors.currentPassword}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">New Password <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control border-secondary bg-transparent text-light"
                    id="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    onBlur={validateNewPassword}
                  />
                  <div className="text-danger error">{errors.newPassword}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm New Password <span className="text-danger">*</span></label>
                  <input
                    type="password"
                    className="form-control border-secondary bg-transparent text-light"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={validateConfirmPassword}
                  />
                  <div className="text-danger error">{errors.confirmPassword}</div>
                </div>
                <button type="submit" className="btn btn-success mb-4">Change password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChangePassword;