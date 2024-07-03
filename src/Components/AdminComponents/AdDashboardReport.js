import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';

function AdDashboardReport() {
  useEffect(() => {
    const barChartCtx = document.getElementById('bar-chart-horizontal').getContext('2d');
    const barChart = new Chart(barChartCtx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Time Spent',
          data: [30, 15, 62, 65, 61, 65, 40],
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y'
      }
    });

    const pieChartCtx = document.getElementById('myPieChart').getContext('2d');
    const pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
        labels: ['Programming in Java', 'UI/UX with Figma', 'Web Development', 'C Programming', 'Mobile App Development', 'Data Analytics'],
        datasets: [{
          label: 'Course Usage',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 0,
            bottom: 0
          }
        }
      }
    });

    return () => {
      barChart.destroy();
      pieChart.destroy();
    };
  }, []);

  return (
    <Container className="mb-5">
      <Row className="container">
        
        <Col xxl={5} xl={6} className="p-3 mt-5 bargraph">
          <h4 className="text-center">Time Spent</h4>
          <br />
          <canvas id="bar-chart-horizontal"></canvas>
        </Col>
        <Col xxl={1}></Col>
        <Col xxl={5} xl={6} className="p-3 mt-5 bargraph">
          <h4 className="text-center">Course Usage</h4>
          <br />
          <div style={{ width: '500px', height: '300px', position: 'relative' }}>
            <canvas id="myPieChart"></canvas>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdDashboardReport;
