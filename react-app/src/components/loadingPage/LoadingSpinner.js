import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
    return (
        <div>
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
            <p className="wait-header">Evaluation is in progress. Please wait. . .</p>
        </div>
    );
}