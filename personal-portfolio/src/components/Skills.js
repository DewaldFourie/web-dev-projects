

import javaS from "../assets/img/javascript.png"
import python from "../assets/img/python.png"
import reactIcon from "../assets/img/react.png"
import html5 from "../assets/img/html5.png"
import css from "../assets/img/css.png"
import git from "../assets/img/git.png"
import sql from "../assets/img/sql.png"
import bootstrap from "../assets/img/bootstrap.png"
import java from "../assets/img/java.png"
import api from "../assets/img/api.png"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Just some of my Technical Skills and Abilities.<br></br>If you would like to find out more, visit my LinkedIn page.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={javaS} alt="" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={reactIcon} alt="" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={html5} alt="" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt="Imge" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={api} alt="" />
                                    <h5>API's</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}
