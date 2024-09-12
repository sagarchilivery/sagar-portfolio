import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import klashraTours from "../../Assets/Projects/Klashra-Tours.png";
import nexwave from "../../Assets/Projects/Nexwave.png";
import qibLogistics from "../../Assets/Projects/QIB-Logistics.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qibLogistics}
              isBlog={false}
              title="QIB-Logistics"
              description="Cargo Solutions : Tailored for You
              Welcome to QIB Logistics (QuickCargo)! We specialize in helping Canada connect with the world through imports and exports. Explore our services and products to discover how we can meet your needs."
              // ghLink="https://qiblogistics.com/"
              demoLink="https://qiblogistics.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nexwave}
              isBlog={false}
              title="NexWave"
              description="We're a global UI UX design
              agency curating experiences
              Scale Businesses"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://main--glistening-baklava-a3e7a8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={klashraTours}
              isBlog={false}
              title="Klashra Tours"
              description="KLASHRA Travel is an award-winning, family-operated travel company that curates unforgettable journeys while keeping the planet's well-being at heart."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://earnest-madeleine-e4b5c0.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
