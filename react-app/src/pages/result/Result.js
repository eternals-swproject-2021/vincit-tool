import React from "react";
import LoadingSpinner from "../../components/loadingPage/LoadingSpinnerEvaluate";
import { BiCheck } from "react-icons/bi"
import { RiCloseFill } from "react-icons/ri"
import ScrollButton from "../../components/scrollButton/ScrollButton";
// import weblogo from './contours/web-logo.png';
import "./result.css";

export default function Result(props) {

    // const [id, setID] = useState('');

    if (props.displayedResults.sub_evaluation === undefined) {
        console.log("is loading")
        return <div><LoadingSpinner /></div>
    }

    return (
        <div>
            <h2 className="headline">Evaluation Result</h2>
            <div class="text-center">
                {/* <img src={require(this.props.displayedResults.overall_img)} class="img-thumbnail" alt="Responsive image"></img>
                        <img src={weblogo}></img> */}
                {/* {props.displayedResults.overall_img} */}

            </div>
            <div class="container" className="result-container-header">
                <div class="row">
                    <div class="col-sm-4">
                        <h5><b className="header5">WCAG AAA:</b> {props.displayedResults.wcag_AAA_percentage}
                            {parseInt(props.displayedResults.wcag_AAA_percentage) < 50
                                ? <span className="risk-badge"> risk</span>
                                : <span class="good-badge"> good</span>
                            }
                        </h5>
                    </div>
                    <div class="col-sm-4">
                        <h5><b className="header5">WCAG AA:</b> {props.displayedResults.wcag_AA_percentage}
                            {parseInt(props.displayedResults.wcag_AA_percentage) < 50
                                ? <span className="risk-badge"> risk</span>
                                : <span class="good-badge"> good</span>
                            }
                        </h5>
                    </div>
                    <div class="col-sm-4">
                        <h5><b className="header5">Statistics</b></h5>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-1"><b className="output-txt">ID</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">{item.id}</div>
                                ))}
                            </div>
                            <div class="col-sm-5"><b className="output-txt">Color Contrast Ratio</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">{item.ratio}</div>
                                ))}
                            </div>
                            <div class="col-sm-3"><b className="output-txt">WCAG AAA</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">
                                        {item.wcag_AAA === true
                                            ? <BiCheck className="check-icon" />
                                            : <RiCloseFill className="cross-icon" />
                                        }
                                    </div>
                                ))}
                            </div>
                            <div class="col-sm-3"><b className="output-txt">WCAG AAA</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">
                                        {item.wcag_AA === true
                                            ? <BiCheck className="check-icon" />
                                            : <RiCloseFill className="cross-icon" />
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                    </div>
                </div>
            </div>
            <ScrollButton/>
        </div>
    )
}

