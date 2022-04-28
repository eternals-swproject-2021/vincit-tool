import React from 'react'
import { AiOutlineSmile } from 'react-icons/ai'
import {FaPython, FaNodeJs, FaReact} from 'react-icons/fa'
import W3C from '../../assets/W3C.svg'

import './document.css'

const Document = () => {
    return (
        <div>
            <h1 className="headline">Document</h1>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={W3C} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">What is WCAG 2.1</h1>
                        <p class="lead">The WCAG or Web Content Accessibility Guidelines are part of a series of web accessibility guidelines published by the Web Accessibility Initiative of the World Wide Web Consortium (W3C). They are a set of recommendations for making web content more accessible, primarily for people with disabilities.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" type="button" class="btn btn-primary btn-lg px-4 me-md-2" >Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-5 mb-4 rounded-3" className="color-section">
                <div class="container-fluid py-5">
                    <h1 class="h-100 p-5 fw-bold rounded-3" className="topic-header"> <u>Why Color Contrast Matters </u><AiOutlineSmile /></h1>
                    <p class="lead" className="topic-content">Designing color contrast for a website is not just an aesthetic. It is necessity for the purpose of accessibility.
                        This includes text on images, icons, and buttons, as well as other graphical information such as diagrams and maps.
                        Choosing the text size, background and foreground colors with minimum contrast ratio will lead to much higher visibility across a wider range of users, especially people with color-blindness and the elders.
                        <b> Our tool aims to empower web designers or front-end developers to have awareness and address the color accessibility in their designs.</b></p>
                </div>
            </div>
            <div class="p-5 mb-4 rounded-3 white">
                <div class="container px-4 py-4" id="featured-3">
                    <h2 class="display-5 text-center fw-bold">Our Tech Stack</h2>
                    <div class="row g-4 py-3 row-cols-1 row-cols-lg-3">
                        <div class="feature col">
                            <div class="feature-icon bg-primary bg-gradient">
                            </div>
                            <h2 className="method-header">Python Module <FaPython/></h2>
                            <p className="method-content">We create a Python script integrating 'OpenCV' module to detect colors from specific image. The algorithm identifies pixels in an image, so that we can get the values (colors and texts) in each pixel and map them into the metrics on an image.</p>
                        </div>
                        <div class="feature col">
                            <div class="feature-icon bg-primary bg-gradient">
                            </div>
                            <h2 className="method-header">Node.js API <FaNodeJs/></h2>
                            <p className="method-content">After gathering the values from Python script's result, we store them into parameters in order to create an API for checking contrast between two colors and determining font size of each metric using Node.js.</p>
                        </div>
                        <div class="feature col">
                            <div class="feature-icon bg-primary bg-gradient">
                            </div>
                            <h2 className="method-header">ReactJS <FaReact/></h2>
                            <p className="method-content">Developing Node.js with React allows us to build a lightweight back-end model. After evaluation process, our React interface will be able to give users an understandable report of color contrast evaluation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document