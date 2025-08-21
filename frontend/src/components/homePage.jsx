import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import OutcomeContext from '../OutcomeContext';

// Import images
import EducationImg from '../assets/icon-education.jpg';
import EconomicResilienceImg from '../assets/icon-resilience.jpg';
import GenderBasedViolenceImg from '../assets/icon-gbv.jpg';
import RenewableEnergyImg from '../assets/icon-energy.jpg';
import UniversalHealthCareImg from '../assets/icon-health.jpg';
import frameworkImg from '../assets/framework.jpg';

function HomePage() {
  const { setOutcome } = useContext(OutcomeContext);

  const handleNavigation = (newOutcome, path) => {
    setOutcome(newOutcome);
  };

  const [data, setData] = useState({});
  const tiles = [
    { title: 'Education', icon: EducationImg, path: '/Education' },
    { title: 'Economic Resilience', icon: EconomicResilienceImg, path: '/EconomicResilience' },
    { title: 'Gender-Based Violence', icon: GenderBasedViolenceImg, path: '/GenderBasedViolence' },
    { title: 'The Energy Transition', icon: RenewableEnergyImg, path: '/RenewableEnergy' },
    { title: 'Universal Healthcare', icon: UniversalHealthCareImg, path: '/UniversalHealthCare' },
  ];

  // useEffect(() => {
  //   const API_URL = 'http://localhost:5000/api/data'; // Adjust the URL as needed

  //   async function fetchData() {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setData(result);
  //       console.log(result);

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <Container fluid className="bg-light min-vh-100 d-flex flex-column align-items-center py-4">
      <Image src={frameworkImg} alt="framework" fluid className="w-75 mb-4 d-none d-md-block" />

      <Card className="w-75 mb-4" style={{ maxWidth: '1200px' }}>
        <Card.Body>
          <Card.Text className="text-justify">
            The outcome-led framework starts by identifying the development outcomes governments seek and then works backward to determine how public finance can contribute effectively to these goals. This visualization allows you to explore the framework and evidence collected from outcome studies.
          </Card.Text>

          <Card.Text as="div">
            First, select a development outcome below. Then explore the public sector context for achieving the development outcome:
            <ul>
              <li>
                A description of the policy outcome itself.
              </li>
              <li>
                The public sector results that contribute to the outcome and the public sector challenges that constrain countries from achieving them.
              </li>
              <li>
                The types of feasible policy and delivery capability needed to deliver the public sector results and overcome the challenges.
              </li>
            </ul>
          </Card.Text>

          <Card.Text as="div">
            Then explore the answers to the two questions posed by the outcome-led framework:
            <ul>
              <li>
                <i>What are the roles that public finance can play in achieving the outcome?</i><br/>
                Explore each of the four roles of public finance identified and country examples of these roles in practice.
              </li>
              <li>
                <i>What are the bottlenecks which prevent this from happening?</i><br/>
                Explore each of the nine public finance bottlenecks identified and country examples of these roles in practice.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <p className="text-justify mb-3" style={{ maxWidth: '1200px' }}>
        Select a development outcome below to start exploring:
      </p>

      <Row className="justify-content-center mb-4" style={{ maxWidth: '1200px' }}>
        {tiles.map((tile) => (
          <Col key={tile.title} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
            <Card
              className="h-100 text-center transition-all shadow-sm hover-shadow"
              onClick={() => handleNavigation(tile.title, tile.path)}
            >
              <Card.Body className="align-items-center p-2">
                <Image src={tile.icon} alt={tile.title} fluid style={{ width:'180px', height: '150px' }}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
