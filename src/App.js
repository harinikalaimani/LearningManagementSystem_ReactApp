import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.scss';
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import InRouter from './router/InRouter'
import AdRouter from './router/AdRouter'
import StRouter from './router/StRouter'
import StudentLayout from './layout/StudentLayout'
import InstructorLayout from './layout/InstructorLayout'
import AdminLayout from './layout/AdminLayout'
import LoginLayout from './layout/LoginLayout'
import Loginform from './Components/LoginComponents/LoginForm'

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
