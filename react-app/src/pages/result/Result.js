import React from 'react'
import './result.css'

import IMG from '../../assets/web-logo.png'

const Result = () => {
    return (
        <div>
            <h2 className="headline">Evaluation Result</h2>
            <div class="text-center"><img src={IMG} class="img-thumbnail" alt="Responsive image"></img></div>
            <div class="container" className="result-container-header">
                <div class="row">
                    <div class="col-sm-4"  >
                        <h5><b>WCAG AAA %:</b></h5>
                    </div>
                    <div class="col-sm-4" >
                        <h5><b>WCAG AA %:</b></h5>
                    </div>
                    <div class="col-sm-4" >
                        <h5><b>Statistics</b></h5>
                    </div>
                </div>
                    <div class="row">
                        <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-1">ID</div>
                            <div class="col-sm-5" >Color Contrast Ratio</div>
                            <div class="col-sm-3" >WCAG AAA</div>
                            <div class="col-sm-3" >WCAG AA</div>
                        </div>
                        </div>
                        
                        <div class="col-sm-2"></div>
                        <div class="col-sm-4">
                            <div> 2 of 2</div>
                        </div>

                        {/* <div class="col" align="center">
                            2 of 2
                        </div> */}
                </div>

            </div>
        </div>
    )
}

export default Result