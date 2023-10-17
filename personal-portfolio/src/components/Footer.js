import { Container, Row, Col } from "react-bootstrap";
import { Quote } from "./Quote"; 
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubLogo from "../assets/img/githubLogo.png"

export const Footer = () => {

  const openGitHubUrl = () => {
    window.open('https://github.com/DewaldFourie', '_blank');
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Quote />
          <Col size={12} sm={6}>
            <img className="footer-github" src={githubLogo} alt="Logo" onClick={openGitHubUrl} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dewald-fourie-a8643b1b3/"><img className="footer-socials" src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100088510712088"><img className="footer-socials" src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/dewaldfourie15/"><img className="footer-socials" src={navIcon3} alt="Icon" /></a>
            </div>
            <p>©DewaldFourie 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
