

import javaS from "../assets/img/javascript.png"
import python from "../assets/img/python.png"
import reactIcon from "../assets/img/react.png"
import nodeJs from "../assets/img/nodeJs.png"
import css from "../assets/img/css.png"
import git from "../assets/img/git.png"
import sql from "../assets/img/sql.png"
import bootstrap from "../assets/img/bootstrap.png"
import java from "../assets/img/java.png"
import api from "../assets/img/api.png"
import typeS from "../assets/img/typescript.png"

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-3d-carousel'
import 'react-responsive-3d-carousel/dist/styles.css'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {


    const items = [
        <div className="item">
            <img src={typeS} alt="" />
            <h5>TypeScript</h5>
        </div>,
        <div className="item">
            <img src={python} alt="" />
            <h5>Python</h5>
        </div>,
        <div className="item">
            <img src={reactIcon} alt="" />
            <h5>React</h5>
        </div>,
        <div className="item">
            <img src={nodeJs} alt="" />
            <h5>NodeJS</h5>
        </div>,
        <div className="item">
            <img src={css} alt="" />
            <h5>CSS</h5>
        </div>,
        <div className="item">
            <img src={git} alt="" />
            <h5>Git</h5>
        </div>,
        <div className="item">
            <img src={sql} alt="Imge" />
            <h5>SQL</h5>
        </div>,
        <div className="item">
            <img src={javaS} alt="" />
            <h5>JavaScript</h5>
        </div>,
        <div className="item">
            <img src={java} alt="" />
            <h5>Java</h5>
        </div>,
        <div className="item">
            <img src={api} alt="" />
            <h5>API's</h5>
        </div>
    ]

    const [dimensions, setDimensions] = useState(getDimensions());

    // Function to determine dimensions based on screen size
    function getDimensions() {
        if (window.innerWidth <= 768) {
            return { width: 0.32, height: '150px' , numOfSlides: 3, containerWidth: '100%', showArrows: false}; // Mobile
        } else if (window.innerWidth <= 1024) {
            return { width: 0.18, height: '150px' , numOfSlides: 5, containerWidth: '100%', showArrows: true}; // Tablet
        } else {
            return { width: 0.191, height: '300px', numOfSlides: 5, containerWidth: '100%', showArrows: true}; // Desktop
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this runs only on mount/unmount

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Just some of my Technical Skills and Abilities.<br></br>If you would like to find out more, visit my LinkedIn page.</p>
                            <Carousel className="carousel" items={items} 
                                        startIndex={0} 
                                        containerWidth={dimensions.containerWidth}
                                        width={dimensions.width}
                                        height={dimensions.height}
                                        showIndicators={false}
                                        showStatus={false}
                                        showArrows={dimensions.showArrows}
                                        depthFactor={1}
                                        defaultOption={{numOfSlides: dimensions.numOfSlides}}
                            >
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}
