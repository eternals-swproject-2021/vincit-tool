import React from "react";
import LoadingSpinner from "../../components/loadingPage/LoadingSpinnerEvaluate";
import { BiCheck } from "react-icons/bi"
import { RiCloseFill, RiQuestionFill, RiErrorWarningFill } from "react-icons/ri"
import CONTOUR from './../contours/contour.png';
import ScrollButton from "../../components/scrollButton/ScrollButton";

import "./result.css";

export default function Result(props) {

    if (props.displayedResults.sub_evaluation === undefined) {
        console.log("is loading")
        return <div><LoadingSpinner /></div>
    }

    if (props.displayedResults.wcag_AA_normal_percentage === 'NaN %') {
        return <div className="error-div">
        <h3 className="error-msg"><RiErrorWarningFill size={50}/></h3>
            <h3 className="error-msg">This file cannot be evaluated.</h3>
            <h3 className="error-msg">Please upload an image that contains text!</h3>
        </div>
    }

    return (
        <div>
            <ScrollButton />
            <h2 className="headline">Evaluation Result</h2>
            <div class="text-center">
                <img src={CONTOUR} className="img-thumbnail" alt="Evaluated Image"></img>

            </div>
            <div class="row" >
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-1">
                            <b className="output-txt">ID</b>
                            {props.displayedResults.sub_evaluation.map((item, i) => (
                                <div key={i} className="output-txt">{item.id}</div>
                            ))}
                        </div>
                        <div class="col-sm-3">
                            <b className="output-txt">Color Contrast Ratio</b>
                            {props.displayedResults.sub_evaluation.map((item, i) => (
                                <div key={i} className="output-txt">{item.ratio}</div>
                            ))}
                        </div>
                        <div class="col-sm-2">
                            <b className="output-txt">WCAG AAA Normal<span className="tooltip2"><RiQuestionFill className="fa fa-chevron-circle-right hvr-icon" /><span className="tooltiptext2">Minimum Contrast Ratio of WCAG AAA Normal Text is 7:1.</span></span></b>
                            {props.displayedResults.sub_evaluation.map((item, i) => (
                                <div key={i} className="output-txt">
                                    {item.wcag_AAA_normal === true
                                        ? <BiCheck className="check-icon" />
                                        : <RiCloseFill className="cross-icon" />
                                    }
                                </div>
                            ))}
                        </div>
                        <div class="col-sm-2">
                            <b className="output-txt">WCAG AAA Large<span className="tooltip2"><RiQuestionFill className="fa fa-chevron-circle-right hvr-icon" /><span className="tooltiptext2">Minimum Contrast Ratio of WCAG AAA Large Text is 4.5:1.</span></span></b>
                            {props.displayedResults.sub_evaluation.map((item, i) => (
                                <div key={i} className="output-txt">
                                    {item.wcag_AAA_large === true
                                        ? <BiCheck className="check-icon" />
                                        : <RiCloseFill className="cross-icon" />
                                    }
                                </div>
                            ))}
                        </div>
                        <div class="col-sm-2">
                            <b className="output-txt">WCAG AA Normal<span className="tooltip2"><RiQuestionFill className="fa fa-chevron-circle-right hvr-icon" /><span className="tooltiptext2">Minimum Contrast Ratio of WCAG AA Normal Text is 4.5:1.</span></span></b>
                            {props.displayedResults.sub_evaluation.map((item, i) => (
                                <div key={i} className="output-txt">
                                    {item.wcag_AA_normal === true
                                        ? <BiCheck className="check-icon" />
                                        : <RiCloseFill className="cross-icon" />
                                    }
                                </div>
                            ))}
                        </div>
                        <div class="col-sm-2">
                            <b className="output-txt">WCAG AA Large<span className="tooltip2"><RiQuestionFill className="fa fa-chevron-circle-right hvr-icon" /><span className="tooltiptext2">Minimum Contrast Ratio of WCAG AA Large Text is 3:1.</span></span></b>
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

