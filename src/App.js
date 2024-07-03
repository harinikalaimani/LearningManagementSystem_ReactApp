import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import InRouter from '../../LMS-project/src/router/InRouter'
import AdRouter from '../../LMS-project/src/router/AdRouter'
import StRouter from '../../LMS-project/src/router/StRouter'
import StudentLayout from '../../LMS-project/src/layout/StudentLayout'
import InstructorLayout from '../../LMS-project/src/layout/InstructorLayout'
import AdminLayout from '../../LMS-project/src/layout/AdminLayout'
import LoginLayout from '../../LMS-project/src/layout/LoginLayout'
import Loginform from '../../LMS-project/src/Components/LoginComponents/LoginForm'

function App() {
  return (
    <div className="App">    
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<LoginLayout><Loginform/></LoginLayout>}/>
              <Route path='/student/*' element={<StudentLayout><StRouter/></StudentLayout>}/>
              <Route path='/instructor/*' element={<InstructorLayout><InRouter/></InstructorLayout>}/>
              <Route path='/admin/*' element={<AdminLayout><AdRouter/></AdminLayout>}/>
          </Routes>
          </BrowserRouter>
    </div> 
  );
}

export default App;
