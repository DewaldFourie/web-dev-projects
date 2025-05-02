import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import rwcPredictor from "../assets/img/rwcPredictionAppSC.png"
import memoryGame from "../assets/img/memorySS.png"
import cvApp from "../assets/img/CV-APP-SS.png"
import battleships from "../assets/img/battleships.png"
import weatherApp from "../assets/img/weatherApp.png"
import todoApp from "../assets/img/to-do-app.png"
import blogSite from "../assets/img/blogSite.png"
import inventoryApp from "../assets/img/inventoryApp.png"
import imagetaggingApp from "../assets/img/imagetaggingApp.png"
import senseAi from "../assets/img/SenseAI.jpg"
import ciCdDevops from "../assets/img/ci-cd-devops.png"

import tindog from "../assets/img/tindog.png"
import scoops from "../assets/img/heavenlyScoops.png"
import library from "../assets/img/library.png"
import dashboard from "../assets/img/dashboard.png"
import tictactoe from "../assets/img/tictactoe.png"
import calculator from "../assets/img/calculator.png"
import shopping from "../assets/img/shopping-app-ss.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import githubLogo from "../assets/img/githubLogo.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "SenseAI",
      description: "Facial Recognition App",
      imgUrl: senseAi,
      projURL: 'https://face-recognition-app-pink.vercel.app/'
    },
    {
      title: "CI/CD DevOps Monitor",
      description: "Web Application",
      imgUrl: ciCdDevops,
      projURL: 'https://ci-cd-dashboard-dev-ops-monitor.vercel.app/'
    },
    {
      title: "RWC 2023 Predictions",
      description: "Web Application",
      imgUrl: rwcPredictor,
      projURL: 'https://rwc-2023-predictions.vercel.app/'
    },
    {
      title: "Fapple Inventory",
      description: "Database Application",
      imgUrl: inventoryApp,
      projURL: 'https://fapple-inventory-app.glitch.me/catalog'
    },
    {
      title: "Travel Blog",
      description: "CMS Application",
      imgUrl: blogSite,
      projURL:"https://blog-website-app-red.vercel.app"
    },
    {
      title: "FINDR",
      description: "Image Tagging App",
      imgUrl: imagetaggingApp,
      projURL: 'https://image-tagging-fullstack.vercel.app/'
    },



  ];

  const projects2 = [
    {
      title: "Weather Application",
      description: "Web Application",
      imgUrl: weatherApp,
      projURL: 'https://dewaldfourie.github.io/Weather-App/#'
    },
    {
      title: "VirtueVogue",
      description: "E-Commerce",
      imgUrl: shopping,
      projURL: 'https://e-commerce-shop-mocha.vercel.app/home'
    },
    {
      title: "To-Do Application",
      description: "Web Application",
      imgUrl: todoApp,
      projURL: 'https://dewaldfourie.github.io/Todo-List/'
    },
    {
      title: "Admin Dashboard",
      description: "Dashboard Design",
      imgUrl: dashboard,
      projURL: "https://dewaldfourie.github.io/Admin-Dashboard/",
    },
    {
      title: "Battleship",
      description: "Game",
      imgUrl: battleships,
      projURL: 'https://dewaldfourie.github.io/Battle-Ships/'
    },
    {
      title: "CV Generator",
      description: "Web Application",
      imgUrl: cvApp,
      projURL: 'https://cv-application-kohl-two.vercel.app/'
    },

  ];

  const openGitHubUrl = () => {
    window.open('https://github.com/DewaldFourie', '_blank');
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A selection of projects that I have worked on to demonstrate<br></br> my capabilities and showcase my development expertise.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <div className="third-pane-container">
                        <p>For more Projects and Source Code, feel free to visit my <a href="https://github.com/DewaldFourie">Github</a> Page.</p>
                        <img className="github-btn-link" src={githubLogo} alt="" onClick={openGitHubUrl}></img>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  )
}
