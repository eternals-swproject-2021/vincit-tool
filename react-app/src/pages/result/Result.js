import React, { Component } from "react";
import LoadingSpinner from "../../components/loadingPage/LoadingSpinnerEvaluate";
// import weblogo from './contours/web-logo.png';
import "./result.css";


export default class Result extends Component {
    render() {

        const subEvaluation = JSON.stringify(this.props.displayedResults.sub_evaluation);
        console.log(subEvaluation);


        if (this.props.displayedResults.sub_evaluation === undefined) {
            console.log("is loading")
            return <div><LoadingSpinner /></div>
        }
        return (
            <div>
                <h2 className="headline">Evaluation Result</h2>
                <div class="text-center">
                    {/* <img src={require(this.props.displayedResults.overall_img)} class="img-thumbnail" alt="Responsive image"></img>
                <img src={weblogo}></img> */}
                    {this.props.displayedResults.overall_img}

                </div>
                <div class="container" className="result-container-header">
                    <div class="row">
                        <div class="col-sm-4">
                            <h5><b className="header5">WCAG AAA:</b> {this.props.displayedResults.wcag_AAA_percentage}</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5><b className="header5">WCAG AA:</b> {this.props.displayedResults.wcag_AA_percentage}</h5>
                        </div>
                        <div class="col-sm-4">
                            <h5><b className="header5">Statistics</b></h5>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-1"><b>ID</b></div>
                                <div class="col-sm-5"><b>Color Contrast Ratio</b></div>
                                <div class="col-sm-3"><b>WCAG AAA</b></div>
                                <div class="col-sm-3"><b>WCAG AA</b></div>
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                        <div class="col-sm-4">
                            <div> 2 of 2</div>
                        </div>
                    </div>
                    {JSON.stringify(this.props.displayedResults.sub_evaluation[0])}
                </div>
            </div>
        )
    }

}