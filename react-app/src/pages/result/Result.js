import React from "react";
import LoadingSpinner from "../../components/loadingPage/LoadingSpinnerEvaluate";
import { BiCheck } from "react-icons/bi"
import { RiCloseFill } from "react-icons/ri"
import CONTOUR from './../contours/contour.png';
import "./result.css";

export default function Result(props) {

    if (props.displayedResults.sub_evaluation === undefined) {
        console.log("is loading")
        return <div><LoadingSpinner /></div>
    }

    return (
        <div>
            <h2 className="headline">Evaluation Result</h2>
            <div class="text-center">
                <img src={CONTOUR} className="img-thumbnail" alt="Evaluated Image"></img>

            </div>
            <div class="container" className="result-container-header">
                <div class="row">
                    <div class="col-sm-6">
                        <h5 className="header5"><b className="header-bold">WCAG AAA: </b> {props.displayedResults.wcag_AAA_percentage}
                            {parseInt(props.displayedResults.wcag_AAA_percentage) < 50
                                ? <span className="risk-badge"> risk</span>
                                : <span class="good-badge"> good</span>
                            }
                        </h5>
                    </div>
                    <div class="col-sm-6">
                        <h5 className="header5"><b className="header-bold">WCAG AA: </b>  {props.displayedResults.wcag_AA_percentage}
                            {parseInt(props.displayedResults.wcag_AA_percentage) < 50
                                ? <span className="risk-badge"> risk</span>
                                : <span class="good-badge"> good</span>
                            }
                        </h5>
                    </div>
                    {/* <div class="col-sm-4">
                        <h5><b className="header5">Statistics</b></h5>
                    </div> */}
                </div>
                <div class="row" >
                    <div class="col-sm-12">
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
                    {/* <div class="col-sm-2"></div>
                    <div class="col-sm-4"></div> */}
                </div>
            </div>
        </div>
    )
}

