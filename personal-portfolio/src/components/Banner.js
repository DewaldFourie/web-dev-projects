import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import dewaldPP from "../assets/img/dewaldPp.png"
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headShot from "../assets/img/headshot2.jpeg"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Developer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // const downloadResume = () => {
  //   const resumeUrl = '' //path to resume in public folder 

  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = resumeUrl;
  //   downloadLink.download = 'DewaldFourieResume2025.pdf';

  //   downloadLink.click();
  // }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="banner-title">{`Hi! I'm Dewald, a Dedicated`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p>I’m a problem-solving <strong>Software Developer</strong> passionate about building scalable, efficient, and user-friendly applications. My expertise includes <strong>TypeScript, React, Node.js, Python</strong>, and other modern web technologies. I thrive on learning, adapting, and pushing the boundaries of what’s possible with code.</p>
                <button>Download Resume <ArrowDownCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="image-pp" src={headShot} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
