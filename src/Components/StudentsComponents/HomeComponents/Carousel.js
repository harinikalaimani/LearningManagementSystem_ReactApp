import Carousel from 'react-bootstrap/Carousel';
import craoimg1 from '../../../../src/assets/images/caro4.jpg';
import craoimg2 from '../../../../src/assets/images/caro5.jpg';
import craoimg3 from '../../../../src/assets/images//caro6.jpg';
import { Container, Row, Col} from 'react-bootstrap';
function DarkVariantExample() {
  return (
  <div className='caro'>
    <Container fluid className="mt-4 homecont">
    <div className='container'>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={craoimg1}
          alt="First slide"
        />
        <Carousel.Caption>
        <Row>
        <Col md={7}>
        </Col>
        <Col md={5} className='d-flex justify-content-start mb-5'>
          {/* Move Homebtn to the last column */}
        </Col>
        </Row> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={craoimg2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <Row>
        <Col md={7}>
        </Col>
        <Col md={5} className='d-flex justify-content-start mb-5'>
          {/* Move Homebtn to the last column */}
        </Col>
      </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={craoimg3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <Row>
        <Col md={7}>
        </Col>
        <Col md={5} className='d-flex justify-content-start mb-5'>
          {/* Move Homebtn to the last column */}
        </Col>
      </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  </Container>
  </div>
);
}

export default DarkVariantExample;