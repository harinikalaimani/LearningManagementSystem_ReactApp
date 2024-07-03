import {Routes,Route, BrowserRouter } from 'react-router-dom';
import Pstdashboard from '../pages/students-pages/Pstdashboard';
import Stmycourse from '../pages/students-pages/Pstmycourse';
import PstProfile from '../pages/students-pages/PstProfile';
import PstReport from '../pages/students-pages/PStReport';
import PstHome from '../pages/students-pages/PHome';
import Pstindashboard from '../pages/students-pages/Pstindashboard';
import ChangePassword from '../../src/Components/PasswordComponents/ChangePassword';
import ForgotPassword from '../../src/Components/PasswordComponents/ForgotPassword'

function StRouter() {
  return (
  <div className="">
    <Routes>
    <Route  path='/' element={<Pstdashboard />}></Route>
    <Route path='/Home' element={<PstHome/>}></Route>
    <Route path='/Mycourses' element={<Stmycourse/>}></Route>
    <Route path='/Report' element={<PstReport/>}></Route>
    <Route path='/profile' element={<PstProfile/>}></Route>
    <Route path='/course-index/:id' element={<Pstindashboard/>}></Route>
    <Route path='/change-password' element={<ChangePassword/>}></Route>
    <Route path='/forgetpassword' element={<ForgotPassword/>}></Route>
    </Routes>
  </div>
  );
}
export default StRouter;