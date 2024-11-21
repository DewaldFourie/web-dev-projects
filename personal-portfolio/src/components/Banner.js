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

  const downloadResume = () => {
    const resumeUrl = '/D-FourieResume.pdf'//path to resume in public folder 

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'dewaldFourieResume.pdf'

    downloadLink.click();
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="banner-title">{`Hi! I'm Dewald, Aspiring`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a dedicated individual with a strong passion for software development and a knack for solving complex problems. My enthusiasm for learning drives me to stay updated with the latest technologies and their potential applications. I am known for my diligent work ethic and a reputation for trustworthiness. I firmly believe that unwavering dedication and persistence are the keys to overcoming any challenge in life.</p>
                  <button onClick={downloadResume}>Download Resume <ArrowDownCircle size={25} /></button>
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
