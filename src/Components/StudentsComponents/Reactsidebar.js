import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { FaTable, FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getMaterialsFromServer } from '../../Slice/materialslice';
import Ratio from 'react-bootstrap/Ratio';

function Courseconentbar({ courseId }) {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedTheory, setSelectedTheory] = useState(null);
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  const toggleSubMenu = (event) => {
    event.preventDefault();
    const subMenu = event.currentTarget.nextSibling;
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    event.currentTarget.querySelector('.dropdown').classList.toggle('rotate');
  };

  const vidload = (video) => {
    setSelectedVideo(video);
  };

  const theoryload = (theory) => {
    setSelectedVideo(theory);
  };

  const assessmentload = (assessment) => {
    setSelectedVideo(assessment);
  };

  const toggleSidebar = () => {
    setActiveSidebar(!activeSidebar);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMaterialsFromServer());
  }, [dispatch]);

  const { materialsList } = useSelector((state) => state.materials);
  const course = materialsList.find((material) => material.id === courseId);
  const videoMaterial = selectedVideo ? selectedVideo : (course && course.video);
  const TheoryMaterial = selectedTheory ? selectedTheory : (course && course.theory);
  const AssessmentMaterial = selectedAssessment ? selectedAssessment : (course && course.assessment);

  useEffect(() => {
    if (course && course.materials.length > 0) {
      setSelectedVideo(course.materials[0].video); // Set the first video initially
    }
  }, [course]);

  return (
    <Row>
      <div className="col col-xxl-8 col-xl-6 mt-3 p-4 video-content">
        {selectedVideo && (
          <Ratio aspectRatio="16x9">
            <embed type="image/svg+xml" src={selectedVideo} />
          </Ratio>
        )}
      </div>
      <div className={`col-xxl-4 col-xl-6 mt-3 ${activeSidebar ? 'active' : ''}`}>
        <div className="sidebar-container">
          <div className="side-bar">
            {course &&
              course.materials.map((material, index) => (
                <div className="menu" key={material.id}>
                  <div className="item">
                    <a  className="sub-btn" onClick={(e) => toggleSubMenu(e)}>
                      <FaTable className="mx-2 mb-1" />
                      Section: {index + 1} {material.sectionname}
                      <FaAngleRight className="dropdown" />
                    </a>
                    <div className="sub-menu">
                      <div className="item">
                        <a  className="sub-btn" onClick={(e) => vidload(material.video)}>
                          <div className="mx-2 mb-1" />
                          <FaAngleRight className="mx-2 mb-1" /> video
                          <div />
                        </a>
                      </div>
                      <div className="item">
                        <a href={material.theory} target="_blank" rel="noreferrer" className="sub-btn">
                          <FaAngleRight className="mx-2 mb-1" /> Theory Content
                        </a>
                      </div>
                      <div className="item">
                        <a href={material.assessment} target="_blank" rel="noreferrer" className="sub-btn">
                          <FaAngleRight className="mx-2 mb-1" /> Assessment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Row>
  );
}

export default Courseconentbar;
