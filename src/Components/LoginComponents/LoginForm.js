import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getfieldfromserver } from '../../Slice/Loginslice'; // Importing action creator
import logo from '../../../src/assets/images/lms black logo.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Loginform() {
    const dispatch = useDispatch(); // Initializing useDispatch hook
    const loginList = useSelector((state) => state.loginform.loginList); // Extracting loginList from Redux store
    const navigate = useNavigate(); // Initializing useNavigate hook
    
    useEffect(() => {
        dispatch(getfieldfromserver()); // Fetching login data from the server when component mounts
    }, [dispatch]);

    const [formData, setFormData] = useState({
        email: '', 
        password: '',
        user: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '', 
        user: '',
    });

    const [showModal, setShowModal] = useState(false); // State for showing/hiding modal

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
        // Clear error message when input changes
        setErrors(prevErrors => ({
            ...prevErrors,
            [id]: '',
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let hasErrors = false;

        // Validate email
        if (!formData.email) { 
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Please enter your email', 
            }));
            hasErrors = true;
        }

        // Validate password
        if (!formData.password) {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: 'Please enter your password',
            }));
            hasErrors = true;
        }

        // Validate user
        if (!formData.user) {
            setErrors(prevErrors => ({
                ...prevErrors,
                user: 'Please select a user type',
            }));
            hasErrors = true;
        }

        if (!hasErrors) {
            // Proceed with form submission
            const selectedUser = loginList.find(user => user.email === formData.email && user.Password === formData.password && user.usertype === formData.user);
            if (selectedUser) {
                console.log(selectedUser);
                switch (selectedUser.usertype) {
                    case 'Student':
                        navigate('/student'); // Redirecting to student dashboard
                        break;
                    case 'Instructor':
                        navigate('/instructor'); // Redirecting to instructor dashboard
                        break;
                    case 'Admin':
                        navigate('/admin'); // Redirecting to admin dashboard
                        break;
                    default:
                        break;
                }
            } else {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    email: 'Invalid Email ID',
                    password: 'Invalid Password', 
                    user: 'Invalid user',
                }));
                setShowModal(true); // Displaying modal for invalid credentials
            }
        }
    };

    return (
        <div  className="loginpage">
        <div>
            <div>

            </div>
            <div className="container  mt-5 login-container bg-light rounded">
            <form
                className="text-dark p-4 rounded-3 ms-auto loginform"
                onSubmit={handleFormSubmit}
            >
                <div className="text-center">  
                    <img src={logo} alt="" height="90px" width="210px" className='Logo py-3 px-3' />
                    <h3>Login</h3>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email <span className="text-danger"> *</span>
                    </label>
                    <input
                        type="email"
                        className="form-control border border-secondary bg-transparent text-dark"
                        id="email"
                        onChange={handleInputChange}
                        value={formData.email}
                    />
                    <div className="text-danger">{errors.email}</div>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password<span className="text-danger">*</span>
                    </label>
                    <input
                        type="password"
                        className="form-control border border-secondary bg-transparent text-dark"
                        id="password"
                        onChange={handleInputChange}
                        value={formData.password} 
                    />
                    <div className="text-danger">{errors.password}</div> 
                </div>

                <div className="form-group">
                    <label htmlFor="user" className="col-sm-2 col-form-label">
                        User <span className="text-danger"> *</span>
                    </label>
                    <select
                        className="form-select border border-secondary bg-transparent text-dark"
                        aria-label="Default select example"
                        id="user"
                        onChange={handleInputChange}
                        value={formData.user}
                    >
                        <option className="bg-dark text-light" value="">
                            Select User
                        </option>
                        {loginList.map(user => (
                            <option key={user.id} className="bg-light" value={user.usertype}>
                                {user.usertype}
                            </option>
                        ))}
                    </select>
                    <div className="text-danger">{errors.user}</div>
                </div>
                <Link to="/student/forgetpassword">Forgot Password</Link>
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-success mt-4 w-100 blue"
                    >
                        Login
                    </button>
                    {Object.values(errors).some(error => error) && (
                        <Button
                            variant="border border-secondary text-dark"
                            className="mt-2"
                            onClick={() => setShowModal(true)}
                        >
                           Hint
                        </Button>
                    )}
                </div>
            </form>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Invalid Credentials</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <p>User Type: Student</p>
                    <p>Email: harinikg@gmail.com</p>
                    <p>Password: harini007</p>
                    </div>
                    <hr></hr>
                    <div>
                    <p>User Type: Instructor</p>
                    <p>Email: instructor@gmail.com</p>
                    <p>Password: Instructor</p>
                    </div>
                    <hr></hr>
                    <div>
                    <p>User Type: Admin</p>
                    <p>Email: admin@gmail.com</p>
                    <p>Password: admin</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
        </div>
    );
}

export default Loginform;
