import React from "react";
import LoadingSpinner from "../../components/loadingPage/LoadingSpinnerEvaluate";
import { BiCheck } from "react-icons/bi"
import { RiCloseFill } from "react-icons/ri"
import CONTOURPNG from './../contours/contour.png';

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
                <img src={CONTOURPNG} className="img-thumbnail" alt="Evaluated Image"></img>

            </div>
                <div class="row" >
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-1"><b className="output-txt">ID</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">{item.id}</div>
                                ))}
                            </div>
                            <div class="col-sm-3"><b className="output-txt">Color Contrast Ratio</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">{item.ratio}</div>
                                ))}
                            </div>
                            <div class="col-sm-2"><b className="output-txt">WCAG AAA Normal</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">
                                        {item.wcag_AAA_normal === true
                                            ? <BiCheck className="check-icon" />
                                            : <RiCloseFill className="cross-icon" />
                                        }
                                    </div>
                                ))}
                            </div>
                            <div class="col-sm-2"><b className="output-txt">WCAG AAA Large</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">
                                        {item.wcag_AAA_large === true
                                            ? <BiCheck className="check-icon" />
                                            : <RiCloseFill className="cross-icon" />
                                        }
                                    </div>
                                ))}
                            </div>
                            <div class="col-sm-2"><b className="output-txt">WCAG AA Normal</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">
                                        {item.wcag_AA_normal === true
                                            ? <BiCheck className="check-icon" />
                                            : <RiCloseFill className="cross-icon" />
                                        }
                                    </div>
                                ))}
                            </div>
                            <div class="col-sm-2"><b className="output-txt">WCAG AA Large</b>
                                {props.displayedResults.sub_evaluation.map((item, i) => (
                                    <div key={i} className="output-txt">
                                        {item.wcag_AA_large === true
                                            ? <BiCheck className="check-icon" />
                                            : <RiCloseFill className="cross-icon" />
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

