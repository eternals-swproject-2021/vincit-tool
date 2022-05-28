import React from 'react'
import './home.css'
import WEBLOGO from '../../assets/web-logo.png'
import { FaChevronCircleRight } from 'react-icons/fa'
import HOWTO1 from '../../assets/1.png'
import HOWTO2 from '../../assets/2.png'
import HOWTO3 from '../../assets/3.png'
import HOWTO4 from '../../assets/4.png'

const Home = () => {

    return (
        <div>
            <div class="px-4 py-2 my-4 text-center">
                <img class="d-block mx-auto mb-4" src={WEBLOGO} alt="web-logo" width="150" height="150"></img>
                <h3 class="subheader">aCHECK</h3>
                <h1 class="display-5 fw-bold">Color Contrast Evaluator</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Ensure the contrast ratio of the background and text colors on your pictures or websites look visually accessible. Following WCAG 2.1 Guidelines for optimum contrast is helpful for users, especially for those with visual impairments like color blindness and the elders.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="/services" class="hvr-icon-forward ref-link">
                            Check Contrast Now
                            <FaChevronCircleRight className="fa fa-chevron-circle-right hvr-icon" />
                            <i class="fa fa-chevron-circle-right hvr-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-stretch align-center brief-description">
                <div className="container">
                    <h2 class="header-desc">How it works. . .</h2>
                    <ul class="description_ul">
                        <li class="description_ul_li">
                            <img src={HOWTO1} class="description_ul_li_img" alt="upload-screenshot"></img>
                            <p class="description_ul_li_p">
                                1) Upload a .jpg, .jpeg or .png <br/> image on Services page <br/>
                            </p>
                        </li>
                        <li class="description_ul_li">
                            <img src={HOWTO2} class="description_ul_li_img" alt="evaluate-tool"></img>
                            <p class="description_ul_li_p">
                                2) Let our tool evaluate <br/>the color contrast
                            </p>
                        </li>
                        <li class="description_ul_li">
                            <img src={HOWTO3} class="description_ul_li_img" alt="get-report"></img>
                            <p class="description_ul_li_p">
                                3) Get a report based on<br/> WCAG 2.1 Guidelines <br/>
                            </p>
                        </li>
                        <li class="description_ul_li">
                            <img src={HOWTO4} class="description_ul_li_img" alt="open-source"></img>
                            <p class="description_ul_li_p">
                               * Open-source :) <br/> Visit on our repo on GitHub!  <br/>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home