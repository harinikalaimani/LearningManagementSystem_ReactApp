import {Routes,Route} from 'react-router-dom';
import PInDashboard from '../../src/pages/instructor-pages/PInDashboard';
import PInmycourse from '../../src/pages/instructor-pages/PInMycourse';
import PInProfile from '../../src/pages/instructor-pages/PInProfile';
import PInReport from '../../src/pages/instructor-pages/pInReport';
import PInHome from '../../src/pages/instructor-pages/PInHome';
import PInMaterialManage from '../../src/pages/instructor-pages/PInMaterialManage';

function InRouter() {
  return (
 
    
    <div className="">
    
    <Routes>
    <Route  path='/InHome' element={<PInHome/>}></Route>
    <Route path='/' element={<PInDashboard/>}></Route>
    <Route path='/InMycourse' element={<PInmycourse/>}></Route>
    <Route path='/InReport' element={<PInReport/>}></Route>
    <Route path='/Inprofile' element={<PInProfile/>}></Route>
    <Route path='/incourse-index/:id' element={<PInMaterialManage/>}></Route>
    </Routes>

   </div>
    
    
  );
}

export default InRouter;