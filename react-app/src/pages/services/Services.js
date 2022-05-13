import React, { Fragment, useState, useEffect } from "react";
import Result from "../result/Result";
import axios from "axios";

import "./services.css";


const Services = () => {

    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("Choose File");
    const [results, setResults] = useState({});
    const [displayedResults, setDisplayedResults] = useState({});

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
            const response = await axios.post("http://localhost:8080/api/upload", formData)
            console.log(response.data);
            evaluate();
            console.log(displayedResults);

        } catch (err) {
            if (err.response.status === 500) {
                console.log("There was a problem with the server");
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

    const evaluate = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/evaluate")
            console.log(response.data);
            setResults(response.data);
            setDisplayedResults(response.data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
    }, [results]);

    return (
        <Fragment>
            <h1 className="headline">Check Contrast</h1>
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
                    {(filename == "Choose File")
                        ? <input type="submit" value="Evaluate" className="upload-btn" disabled="true" />
                        : <input type="submit" value="Evaluate" className="upload-btn" />
                    }

                </div>
            </form>
            {JSON.stringify(results) == "{}"
                ? null
                : <Result displayedResults={displayedResults} />
            }


        </Fragment>
    );
};

export default Services;