import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto' to avoid registration issues

const StReport = () => {
  useEffect(() => {
    // Chart for Time spent
    const timeSpentCtx = document.getElementById('bar-chart-horizontal').getContext('2d');
    const timeSpentChart = new Chart(timeSpentCtx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Time Spent',
          data: [30, 15, 62, 65, 61, 65, 40],
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        indexAxis: 'y',
      },
    });

    // Chart for Course usage
    const courseUsageCtx = document.getElementById('myPieChart').getContext('2d');
    const courseUsageChart = new Chart(courseUsageCtx, {
      type: 'pie',
      data: {
        labels: ['Programming in java', 'UI/UX with figma', 'Web development', 'C programming', 'Mobile App Development', 'Data Analytics'],
        datasets: [{
          label: 'Course usage',
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
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 0,
            bottom: 0,
          },
        },
      },
    });

    // Clean up on component unmount
    return () => {
      timeSpentChart.destroy();
      courseUsageChart.destroy();
    };
  }, []);

  return (
    <section className="home-section">
      {/* <div className='m-left'> */}
        <Row className="mrg-left">
          <Col>
            <div>
              <div className="text">
                <h3>Report</h3>
              </div>
            </div>
            <Container className="ms-start">
              <Row className="container">
                <Col xxl={1}></Col>
                <Col xxl={5} className="p-3 col-xl-6 mt-5 bargraph">
                  <h4 className="text-center">Time spent</h4>
                  <br />
                  <canvas id="bar-chart-horizontal"></canvas>
                </Col>
                <Col xxl={1}></Col>
                <Col xxl={5} className="p-3 mt-5 bargraph"style={{ maxWidth: '500px', height: '400px',}}>
                <h4 className="text-center">Course usage</h4>
                  <br />
                  <div>
                    <canvas id="myPieChart"></canvas>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      {/* </div> */}
    </section>
  );
};

export default StReport;
