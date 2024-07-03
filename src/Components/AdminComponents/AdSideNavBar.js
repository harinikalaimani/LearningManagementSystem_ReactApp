import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/images/logo.png';
import { LuHome } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { LiaBookReaderSolid } from "react-icons/lia";
import { TbReport } from "react-icons/tb";
import { LuPlus } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoMenuSharp } from "react-icons/io5";

function AdSideNavBar() {
  const [show, setShow] = useState(window.innerWidth >= 768);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    // removing the event listener when unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <Button variant="" onClick={handleShow}>
        <IoMenuSharp className='text-light' />
      </Button>

      <Offcanvas show={show} onHide={handleClose} id='sidebar-nav' className='position-fixed'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src={logo} alt="" height="90px" width="210px" className='Logo py-3 px-3' /> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-body">
            <ul className="list-unstyled list px-2">
              <li className="py-2 my-1">
                <Link to="/admin/Home">
                  <LuHome />
                  <span className="px-1"> Home</span>
                </Link>
              </li>
              <li className="py-2 my-1">
                <Link to="/admin">
                  <RxDashboard />
                  <span className="px-1">Dashboard</span>
                </Link>
              </li>
              <li className="py-2 my-1">
                <Link to="/admin/Manageuser">
                  <LiaBookReaderSolid />
                  <span className="px-1"> Manage User</span>
                </Link>
              </li>
              <li className="py-2 my-1">
                <Link to="/admin/ManageCourse">
                  <LuPlus />
                  <span className="px-1"> Manage Course</span>
                </Link>
              </li>
              <li className="py-2 my-1">
                <Link to="/admin/Report">
                  <TbReport />
                  <span className="px-1"> Report</span>
                </Link>
              </li>
              <li className="py-2 my-1">
                <Link to="/admin/profile">
                  <FiUser />
                  <span className="px-1"> Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AdSideNavBar;
