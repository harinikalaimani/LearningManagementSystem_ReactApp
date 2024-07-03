import React, { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button, Modal } from 'react-bootstrap';
import MyVerticallyCenteredModal from './UpdateMaterial';
import { FaFilePdf } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { deleteMaterialsInServer, getMaterialsFromServer, removeMaterialsFromList, setSelectedMaterial } from '../../../Slice/materialslice';

// function MaterialTable() {
//   const { materialsList } = useSelector((state) => state.materials);
//   const dispatch = useDispatch();
//   const [modalShow, setModalShow] = useState(false);
//   const [deleteItem, setDeleteItem] = useState(null);

//   useEffect(() => {
//     dispatch(getMaterialsFromServer());
//   }, [dispatch]);

//   const UpdateMaterial = (material) => {
//     dispatch(setSelectedMaterial(material));
//     setModalShow(true);
//   }

//   const handleDeleteConfirmation = () => {
//     if (deleteItem) {
//       dispatch(deleteMaterialsInServer(deleteItem))
//         .unwrap()
//         .then(() => {
//           dispatch(removeMaterialsFromList(deleteItem));
//           setDeleteItem(null);
//         });
//     }
//   };

//   const handleDelete = (material) => {
//     setDeleteItem(material);
//   };

//   return (
//     <div className='table-responsive text-center'>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Material Id</th>
//             <th>Section Name</th>
//             <th>Video</th>
//             <th>Theory Content</th>
//             <th>Assessment</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             materialsList && materialsList.map((material, index) => {
//               return (
//                 <tr key={material.id} className='justify-content-center align-item-center'>
//                   <td>{index + 1}</td>
//                   <td>{material.materialid}</td>
//                   <td>{material.sectionname}</td>
//                   <td><iframe width="300" height="150"
//                     src={material.video}
//                     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
//                   </iframe></td>
//                   <td><a href={material.theory} target='blank'><FaFilePdf style={{ color: "red", fontSize: "40px" }} /></a></td>
//                   <td><a href={material.assessment} target='blank'><FaFilePdf style={{ color: "red", fontSize: "40px" }} /></a></td>
//                   <td>
//                     <Button variant="outline-danger" className='mx-1' onClick={() => UpdateMaterial(material)}><FaEdit style={{ fontSize: "20px" }} /></Button>
//                     <Button variant="outline-danger" className='mx-1' onClick={() => handleDelete(material)}><MdDelete style={{ fontSize: "20px" }} /></Button>
//                   </td>
//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </Table>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />

//       {/* Confirmation Modal */}
//       <Modal show={!!deleteItem} onHide={() => setDeleteItem(null)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Deletion</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to delete this material?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setDeleteItem(null)}>Cancel</Button>
//           <Button variant="danger" onClick={handleDeleteConfirmation}>Delete</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )
// }




function MaterialTable({M_Id}) {
  const { materialsList } = useSelector((state) => state.materials);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {
    dispatch(getMaterialsFromServer());
  }, [dispatch]);

  const UpdateMaterial = (material) => {
    dispatch(setSelectedMaterial(material));
    setModalShow(true);
  }

  const handleDeleteConfirmation = () => {
    if (deleteItem) {
      dispatch(deleteMaterialsInServer(deleteItem))
        .unwrap()
        .then(() => {
          dispatch(removeMaterialsFromList(deleteItem));
          setDeleteItem(null);
        });
    }
  };

  const handleDelete = (material) => {
    setDeleteItem(material);
  };

  // Filter materialsList based on the provided id
  const filteredMaterials = materialsList.find(course => course.id === M_Id);

  return (
    <div className='table-responsive text-center'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Material Id</th>
            <th>Section Name</th>
            <th>Video</th>
            <th>Theory Content</th>
            <th>Assessment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMaterials && filteredMaterials.materials.map((material, index) => (
            <tr key={material.materialid} className='justify-content-center align-item-center'>
              <td>{index + 1}</td>
              <td>{material.materialid}</td>
              <td>{material.sectionname}</td>
              <td><iframe width="300" height="150"
                src={material.video}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe></td>
              <td><a href={material.theory} target='_blank' rel="noopener noreferrer"><FaFilePdf style={{ color: "red", fontSize: "40px" }} /></a></td>
              <td><a href={material.assessment} target='_blank' rel="noopener noreferrer"><FaFilePdf style={{ color: "red", fontSize: "40px" }} /></a></td>
              <td>
                <Button variant="outline-danger" className='mx-1' onClick={() => UpdateMaterial(material)}><FaEdit style={{ fontSize: "20px" }} /></Button>
                <Button variant="outline-danger" className='mx-1' onClick={() => handleDelete(material)}><MdDelete style={{ fontSize: "20px" }} /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* Confirmation Modal */}
      <Modal show={!!deleteItem} onHide={() => setDeleteItem(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this material?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteItem(null)}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteConfirmation}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default MaterialTable;