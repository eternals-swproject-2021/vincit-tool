import React from 'react'
import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import VINCIT from '../../assets/vincit_logo.svg'
import SE4GD from '../../assets/se4gd.png'
import JARI from '../../assets/jari.png'
import JARNO from '../../assets/jarno.png'
import ARINI from '../../assets/arini.png'
import HIDAYAT from '../../assets/hidayat.png'
import RAJITHA from '../../assets/rajitha.png'
import RAKKAN from '../../assets/rakkan.png'




const About = () => {
    return (
        <div>
            <div>
                <h1 className="headline">About Us</h1>
            </div>
            <div className="i">
                <div className="i-left">
                    <div className="i-wrapper">
                        <img src={SE4GD} alt="se4gd-logo" className="se4gd-logo"></img>
                        <h2 className="i-name">SE4GD, LUT University</h2>
                        <h1 className="i-intro">"Sustainability matters!"</h1>
                        <div className="i-content">
                            <p>The SE4GreenDeal Programme educates experts to innovate, design and implement software-based solutions with sustainable effect in mind for local and global sustainability challenges. We will have an impact on individuals, societies, industries and governments through new responsible ways of developing systems. </p>
                            <p>The SE4GD programme aims to have an extended impact on sustainability. Rather than just improving technology, SE4GD aims to improve the efficiency of other domains like emphasized in the European Green Deal.</p>
                        </div>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-wrapper">
                        <img src={VINCIT} alt="vincit-logo" className="vincit-logo"></img>
                        <h2 className="i-name">VINCIT Company</h2>
                        <h1 className="i-intro-2">"Humanizing digitalization."</h1>
                        <div className="i-content">
                            <p>Vincit works tirelessly on making digital evermore productive and easier to manage. Be it programming, service design or even something that’s yet to be invented. Our goal is a world without anxiety toward technology or fear of what tomorrow may bring.</p>
                            <br/><p>We want to design visually accessible services and websites requires knowledge of minimum contrasts and accessible colour choices. <b>How might we make checking the visual accessibility easy?</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <section id="team" class="team section-bg">
                <div className="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2 className="headline">Meet Our Team</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch align-center">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src={JARI} className="img" alt="Jari Porras"></img>
                                </div>
                                <div className="member-info">
                                    <h4>Jari Porras</h4>
                                    <span>Project Coordinator, SE4GD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch align-center">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src={JARNO} className="img" alt="Jarno Ojala"></img>
                                </div>
                                <div className="member-info">
                                    <h4>Jarno Ojala</h4>
                                    <span>Product Owner, VINCIT</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch align-center">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src={ARINI} className="img" alt="Arini N. Rohmah"></img>
                                </div>
                                <div className="member-info">
                                    <h4>Arini Nur Rohmah</h4>
                                    <span>Back-end Developer, SE4GD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch align-center">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src={HIDAYAT} className="img" alt="Mochamad R. Hidayat"></img>
                                </div>
                                <div className="member-info">
                                    <h4>Mochamad Rizal Hidayat</h4>
                                    <span>Back-end Developer, SE4GD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch align-center">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src={RAJITHA} className="img" alt="Rajitha Manellanga"></img>
                                </div>
                                <div className="member-info">
                                    <h4>Rajitha Manellanga</h4>
                                    <span>Back-end Developer, SE4GD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch align-center">
                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                <div className="member-img">
                                    <img src={RAKKAN} className="img" alt="Rakkan Tiasakul"></img>
                                </div>
                                <div className="member-info">
                                    <h4>Rakkan Tiasakul</h4>
                                    <span>Front-end Developer, SE4GD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About