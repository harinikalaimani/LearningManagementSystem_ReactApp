import DarkVariantExample from './HomeComponents/Carousel';
import Aboutus from './HomeComponents/Aboutus';
import ServiceFully from './HomeComponents/ServiceFully';
import { Container, Row, Col  } from 'react-bootstrap';
function StHome() {
  return (
    <Row className="mrg-left">
    <Col>
       <div>
         <div className="text">
            <h3>Home</h3>
         </div>
       </div>
       <Container className="ms-start">
       
       <Container>
       <DarkVariantExample/>
        <ServiceFully/>
        <Aboutus/>  
       </Container>
        
      </Container>
   </Col>
 </Row>
  );
}

export default StHome ;
