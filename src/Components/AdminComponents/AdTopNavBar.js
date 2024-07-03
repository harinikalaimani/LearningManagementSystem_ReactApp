import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Dropdown } from 'react-bootstrap';
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";
import navlogo from '../../../src/assets/images/logo.png';
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import Topprofile from "../../../src/assets/images/favatar.svg";
import AdSideNavBar from '../../Components/AdminComponents/AdSideNavBar';

function TopNavBar() {
  return (
    <Navbar className="bg-blue fixed-top top-nav">
      <Container fluid>
        <AdSideNavBar />
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Nav className="me-auto my-2 my-lg-0">
          {/* Use Link component instead of Nav.Link */}
          <Link to="/" className="navbar-brand">
            <img src={navlogo} alt="" height="30px" width="80px" />
          </Link>
        </Nav>

        <Button variant="none" className='notification text-light'><IoMdNotificationsOutline/></Button>
        <Button variant="none" className='chat text-light'><FaRegCommentAlt/></Button>

        <div>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic" className='text-light'>
              <img src={Topprofile} alt="" height="30px" width="30px" /> <span className='Profile-name'></span>
              <span className='Profile-name text-light'>Admin</span>
            </Dropdown.Toggle>

            <div>
              <Dropdown.Menu className="dropdown-menu-end dropdown-menu-light">
                <Link to="/change-password" className="dropdown-item">
                  <AiOutlineSetting /> Change password
                </Link>
                <Link to="/" className="dropdown-item">
                  <MdOutlineLogout /> Logout
                </Link>
              </Dropdown.Menu>
            </div>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
