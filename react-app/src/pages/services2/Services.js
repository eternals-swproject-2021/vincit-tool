import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import LoadingSpinner from '../../components/loadingPage/LoadingSpinner';
import axios from 'axios'
import './services.css'


const Services = () => {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )

        try {
            axios.post('http://localhost:8080/upload', formData, {
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    );
                }
            }).then((response) => {
                console.log(response.status);
                console.log(response.data);
            });  

            // setTimeout(() => setUploadPercentage(0), 10000);
            // const { fileName, filePath } = res.data;
            // setUploadedFile({ fileName, filePath });
            // setMessage('File Uploaded');

        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
            setUploadPercentage(0)
        }
    };

    return (
        <div>
            <h1 className="headline">Check Contrast</h1>
            <div>
                <Fragment>
                    {message ? <Message msg={message} /> : null}
                    <form onSubmit={onSubmit}>
                        <div class='custom-file mb-4' className="upload-section">
                            <input
                                type='file'
                                className='custom-file-input'
                                id='customFile'
                                onChange={onChange}
                            />
                        </div>

                        { filename == "Choose File" || isLoading
                            ? <input type='submit' value='Evaluate' className='evaluate-btn' disabled="true" />
                            : <input type='submit' value='Evaluate' className='evaluate-btn' />
                        }

                    </form>
                    {isLoading ? <LoadingSpinner /> : <p>{filename}</p>}
                </Fragment>
            </div>
        </div>

    );
};

export default Services;