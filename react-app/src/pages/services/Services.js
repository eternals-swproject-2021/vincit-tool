import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import Progress from "./Progress";
import Result from "../result/Result";
import LoadingSpinnerUpload from "../../components/loadingPage/LoadingSpinnerUpload";
import LoadingSpinnerEvaluate from "../../components/loadingPage/LoadingSpinnerEvaluate";

import axios from "axios"
import "./services.css"


const Services = () => {

    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [results, setResults] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )

        try {
            setIsUploading(true);
            setIsEvaluating(false);
            const response = await axios.post("http://localhost:8080/api/upload", formData, {
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                    );
                }
            })
            console.log(response.data);
            setIsUploading(false);
            setIsEvaluating(false);

            // setTimeout(() => setUploadPercentage(0), 10000);
            // const { fileName, filePath } = res.data;
            // setUploadedFile({ fileName, filePath });
            // setMessage("File Uploaded");

        } catch (err) {
            if (err.response.status === 500) {
                setMessage("There was a problem with the server");
            } else {
                setMessage(err.response.data.msg);
            }
            setUploadPercentage(0)
        }
    };

    const evaluate = async () => {
        try {
            setIsUploading(false);
            setIsEvaluating(true);
            const response = await axios.post("http://localhost:8080/api/evaluate")
            console.log(response.data);
            setResults(response.data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
    }, [results]);

    const mapping = () => {
        return results.map((item, index) => <p key={index}>{item.wcag_AA_percentage}</p>);
      };


    return (
        <Fragment>
            <h1 className="headline">Check Contrast</h1>
            {/* {message ? <Message msg={message} /> : null} */}
            <form onSubmit={onSubmit}>
                <div class="custom-file mb-4" className="upload-section">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={onChange}
                        accept=".png, .jpg, .jpeg"
                    />
                </div>
                <div className="btn-zone">
                    {(filename == "Choose File" || isUploading)
                        ? <input type="submit" value="Upload" className="upload-btn" disabled="true" />
                        : <input type="submit" value="Upload" className="upload-btn" />
                    }
                    {(isUploading)
                        ? <input type="button" value="Evaluate" className="evaluate-btn" onClick={evaluate} disabled="true" />
                        : <input type="button" value="Evaluate" className="evaluate-btn" onClick={evaluate} />
                    }

                </div>
            </form>

            {/* {isEvaluating ? <LoadingSpinnerEvaluate /> : <p> {JSON.stringify(results)}</p>} */}
            {/* {isUploading ? <LoadingSpinnerEvaluate /> : <p> {JSON.stringify(results)}</p>} */}

            {JSON.stringify(results)}
            <div>
                {/* <p>Image : {JSON.stringify(results.overall_img)}</p> */}
                {/* <p>Overall WCAG AA: {JSON.stringify(results.wcag_AA_percentage)}</p>
                <p>Overall WCAG AAA: {JSON.stringify(results.wcag_AAA_percentage)}</p> */}
                
            </div>
            <Result/>
        </Fragment>
    );
};

export default Services;