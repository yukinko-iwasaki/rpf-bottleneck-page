import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import OutcomeContext from '../OutcomeContext';

// Import images
import EducationImg from '../assets/icon-education.svg';
import EconomicResilienceImg from '../assets/icon-resilience.svg';
import GenderBasedViolenceImg from '../assets/icon-gbv.svg';
import RenewableEnergyImg from '../assets/icon-energy.svg';
import UniversalHealthCareImg from '../assets/icon-health.svg';
import frameworkImg from '../assets/framework.jpg';

function HomePage() {
  const { setOutcome } = useContext(OutcomeContext);
  const navigate = useNavigate();

  const handleNavigation = (newOutcome, path) => {
    setOutcome(newOutcome);
    navigate(path);
  };

  const tiles = [
    { title: 'Education', icon: EducationImg, path: '/Education' },
    { title: 'Economic Resilience', icon: EconomicResilienceImg, path: '/EconomicResilience' },
    { title: 'Gender-Based Violence', icon: GenderBasedViolenceImg, path: '/GenderBasedViolence' },
    { title: 'The Energy Transition', icon: RenewableEnergyImg, path: '/RenewableEnergy' },
    { title: 'Universal Healthcare', icon: UniversalHealthCareImg, path: '/UniversalHealthCare' },
  ];

  return (
    <Container fluid className="bg-light min-vh-100 d-flex flex-column align-items-center py-4">
      <Image src={frameworkImg} alt="framework" fluid className="w-75 mb-4" />

      <Card className="w-75 mb-4" style={{ maxWidth: '1200px' }}>
        <Card.Body>
          <Card.Text className="text-justify">
            The outcome-led framework starts by identifying the development outcomes governments seek and then works backward to determine how public finance can contribute effectively to these goals. This visualization allows you to explore the framework and evidence collected from outcome studies.
          </Card.Text>

          <Card.Text>
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

          <Card.Text>
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
          <Col key={tile.title} xs={6} sm={4} md={3} lg={2}>
            <Card
              className="h-100 text-center transition-all shadow-sm hover-shadow"
              onClick={() => handleNavigation(tile.title, tile.path)}
            >
              <Card.Body className="align-items-center p-2">
                <Image src={tile.icon} alt={tile.title} fluid style={{ width:'150px', height: '120px' }}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
