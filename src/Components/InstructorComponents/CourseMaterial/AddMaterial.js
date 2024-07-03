import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addMaterialsFromServer } from '../../../Slice/materialslice';
import MaterialTable from "../../../../src/Components/InstructorComponents/CourseMaterial/MaterialTable";
import InCourseHeading from '../../InstructorComponents/InCourseHeading';

function AddMaterialModel({course_id}){
  const dispatch = useDispatch();
  const [materialid, setMaterialId] = useState('');
  const [sectionname, setSectionName] = useState('');
  const [video, setVideo] = useState('');
  const [theory, setTheory] = useState('');
  const [assessment, setAssessment] = useState('');
  const [show, setShow] = useState(false);

  const [materialIdError, setMaterialIdError] = useState('');
  const [sectionNameError, setSectionNameError] = useState('');
  const [videoError, setVideoError] = useState('');
  const [theoryError, setTheoryError] = useState('');
  const [assessmentError, setAssessmentError] = useState('');

  const addMaterial = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    dispatch(addMaterialsFromServer({ materialid, sectionname, video, theory, assessment }));
    resetForm();
    setShow(false);
  };

  const validateForm = () => {
    let isValid = true;

    if (!materialid.trim()) {
      setMaterialIdError('Material ID is required.');
      isValid = false;
    } else {
      setMaterialIdError('');
    }

    if (!sectionname.trim()) {
      setSectionNameError('Section Name is required.');
      isValid = false;
    } else {
      setSectionNameError('');
    }

    if (!video.trim()) {
      setVideoError('Video URL is required.');
      isValid = false;
    } else if (!isValidUrl(video)) {
      setVideoError('Please enter a valid Video URL.');
      isValid = false;
    } else {
      setVideoError('');
    }

    if (!theory.trim()) {
      setTheoryError('Theory URL is required.');
      isValid = false;
    } else if (!isValidUrl(theory)) {
      setTheoryError('Please enter a valid Theory URL.');
      isValid = false;
    } else {
      setTheoryError('');
    }

    if (!assessment.trim()) {
      setAssessmentError('Assessment URL is required.');
      isValid = false;
    } else if (!isValidUrl(assessment)) {
      setAssessmentError('Please enter a valid Assessment URL.');
      isValid = false;
    } else {
      setAssessmentError('');
    }

    return isValid;
  };

  const isValidUrl = (url) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  };

  const resetForm = () => {
    setMaterialId('');
    setSectionName('');
    setVideo('');
    setTheory('');
    setAssessment('');
    setMaterialIdError('');
    setSectionNameError('');
    setVideoError('');
    setTheoryError('');
    setAssessmentError('');
    
  };

  return (
    <>
      <div className="home-section">
        <div className="m-left">
          <div className='mrg-left'>
            <div className='mb-3'>
              <InCourseHeading />
            </div>
            <div className='mb-3  d-flex justify-content-between p-3'>
              <div>
                <h3>Material Management</h3>
              </div>
              <div>
                <Button variant="success" onClick={() => setShow(true)}>
                  Add Material
                </Button>
              </div>
            </div>
            <div className="container ms-start">
            <MaterialTable M_Id={course_id}/>
              <div>
                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Material Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="materialId">
                        <Form.Label>Material ID:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Material ID"
                          value={materialid}
                          onChange={(e) => setMaterialId(e.target.value)}
                        />
                        {materialIdError && <p className="text-danger">{materialIdError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="sectionName">
                        <Form.Label>Section Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Section Name"
                          value={sectionname}
                          onChange={(e) => setSectionName(e.target.value)}
                        />
                        {sectionNameError && <p className="text-danger">{sectionNameError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="video">
                        <Form.Label>Video URL:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Video URL"
                          value={video}
                          onChange={(e) => setVideo(e.target.value)}
                        />
                        {videoError && <p className="text-danger">{videoError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="theory">
                        <Form.Label>Theory URL:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Theory URL"
                          value={theory}
                          onChange={(e) => setTheory(e.target.value)}
                        />
                        {theoryError && <p className="text-danger">{theoryError}</p>}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="assessment">
                        <Form.Label>Assessment URL:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Assessment URL"
                          value={assessment}
                          onChange={(e) => setAssessment(e.target.value)}
                        />
                        {assessmentError && <p className="text-danger">{assessmentError}</p>}
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={addMaterial}>
                      Add Material
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMaterialModel;
















