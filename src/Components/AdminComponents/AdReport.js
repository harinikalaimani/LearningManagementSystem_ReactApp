import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdDashboardReport from './AdDashboardReport';

function AdReport() {
  return (
    <section className="home-section">
      <div className="mrg-left">
        <div>
          <div className="text"><h3>Report</h3></div>
        </div>
        <Container className="ms-start">
          <AdDashboardReport/>
        </Container>
      </div>
    </section>
  );
}

export default AdReport;
