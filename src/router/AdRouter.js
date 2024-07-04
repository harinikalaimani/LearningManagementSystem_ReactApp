import {Routes,Route, BrowserRouter } from 'react-router-dom';
import PAdDashboard from '../pages/admin-pages/PAdDashboard';
import PAdManageUser from '../pages/admin-pages/PAdMangeUser';
import PAdMangeCourse from '../pages/admin-pages/PAdManageCourse';
import PAdReport from '../pages/admin-pages/PAdReport';
import PAdProfile from '../pages/admin-pages/PAdProfile'
import PAdHome from '../pages/admin-pages/PAdHome';
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