import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-figma.png";
import projImg2 from "../assets/img/project-yoom.png";
import projImg3 from "../assets/img/project-imaginify.png";
import projImg4 from "../assets/img/project-iphone.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Figma Clone",
      description: "A collaborative interface design tool clone.",
      imgUrl: projImg1,
      projectUrl: "https://clone-figmaa.netlify.app",
    },
    {
      title: "Yoom",
      description: "A modern video conferencing application.",
      imgUrl: projImg2,
      projectUrl: "https://clone-yoom.netlify.app",
    },
    {
      title: "Imaginify",
      description: "AI-powered image manipulation and restoration.",
      imgUrl: projImg3,
      projectUrl: "https://ai-imaginify.netlify.app",
    },
    {
      title: "iPhone 15 Pro",
      description: "3D interactive product showcase website.",
      imgUrl: projImg4,
      projectUrl: "https://app-iphone.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I have worked on to apply my technical skills in
                    real-world scenarios. These projects reflect my learning journey, creativity,
                    and problem-solving abilities using modern technologies.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          I am a passionate and motivated developer who enjoys building modern, responsive
                          web applications. I love turning ideas into real projects using clean code and
                          creative design, while continuously improving my skills and learning new technologies.
                        </p>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I create clean, responsive, and user-friendly websites using modern web technologies.
                        </p>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
