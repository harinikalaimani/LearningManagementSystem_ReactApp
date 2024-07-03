import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateMaterialsInServer } from '../../../Slice/materialslice';

function MyVerticallyCenteredModal(props) {
  const { selectedMaterial } = useSelector((state) => state.materials);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [materialid, setMaterialId] = useState('');
  const [sectionname, setSectionName] = useState('');
  const [video, setVideo] = useState('');
  const [theory, setTheory] = useState('');
  const [assessment, setAssessment] = useState('');
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const [materialIdError, setMaterialIdError] = useState('');
  const [sectionNameError, setSectionNameError] = useState('');
  const [videoError, setVideoError] = useState('');
  const [theoryError, setTheoryError] = useState('');
  const [assessmentError, setAssessmentError] = useState('');

  useEffect(() => {
    if (Object.keys(selectedMaterial).length !== 0) {
      setMaterialId(selectedMaterial.materialid);
      setSectionName(selectedMaterial.sectionname);
      setVideo(selectedMaterial.video);
      setTheory(selectedMaterial.theory);
      setAssessment(selectedMaterial.assessment);
      setId(selectedMaterial.id);
    }
  }, [selectedMaterial]);

  const UpdateMaterial = () => {
    if (!validateForm()) {
      return;
    }
    props.onHide();
    dispatch(UpdateMaterialsInServer({ id, materialid, sectionname, video, theory, assessment }));
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

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Material
        </Modal.Title>
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
        <div className='text-end'>
          <Button className='m-3' variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" type="submit" onClick={UpdateMaterial}>Update Material</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
