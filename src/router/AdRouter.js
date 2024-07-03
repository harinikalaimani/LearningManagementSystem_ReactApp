import {Routes,Route, BrowserRouter } from 'react-router-dom';
import PAdDashboard from '../../src/pages/admin-pages/PAdDashboard';
import PAdManageUser from '../../src/pages/admin-pages/PAdMangeUser';
import PAdMangeCourse from '../../src/pages/admin-pages/PAdManageCourse';
import PAdReport from '../../src/pages/admin-pages/PAdReport';
import PAdProfile from '../../../LMS-project/src/pages/admin-pages/PAdProfile'
import PAdHome from '../../src/pages/admin-pages/PAdHome';
import Addcourse from '../Components/AdminComponents/AdUsermanagement/AdCourse';


function AdRouter() {
  return (
 
    
    <div className="">
    
    <Routes>
    <Route  path='/home' element={<PAdHome/>}></Route>
    <Route path='/' element={<PAdDashboard/>}></Route>
    <Route path='/dashboard' element={<PAdDashboard/>}></Route>
    <Route path='/Manageuser' element={<PAdManageUser/>}></Route>
    <Route path='/ManageCourse' element={<PAdMangeCourse/>}></Route>
    <Route path='/Report' element={<PAdReport/>}></Route>
    <Route path='/profile' element={<PAdProfile/>}></Route>
    {/* <Route path='students/course-index' element={<Pstindashboard/>}></Route> */}
    </Routes>
   </div>
    
    
  );
}

export default AdRouter;