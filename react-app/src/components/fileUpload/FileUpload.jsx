import React from 'react'
import './fileUpload.scss'
import axios from 'axios'

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                console.error(err)
                removeFile(file.name)
            });
    }

    return (
        <>
            <div className="file-card">
                <div className="file-inputs">
                    <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={uploadHandler} />
                    <button>
                        Upload
                    </button>
                </div>
                <p className="main">Supports files: </p>
                <p className="info">.JPG and .PNG only</p>

            </div>
        </>
    )
}

export default FileUpload