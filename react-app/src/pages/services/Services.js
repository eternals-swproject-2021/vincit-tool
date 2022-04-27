import { React, useState, Component } from 'react'
import FileUpload from '../../components/fileUpload/FileUpload';
import FileList from '../../components/fileList/FileList';
import './services.css';

const Services = () => {
    const [files, setFiles] = useState([])

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
    }

    return (
        <div>
            <h1 className="headline">Check Contrast</h1>
            <div class="px-4 py-5 text-center">
                <FileUpload files={files} setFiles={setFiles}
                    removeFile={removeFile} />
            </div>
            <FileList className="file-list" files={files} removeFile={removeFile} />
            <div>
                {files.length === 0
                    ? <input className="evaluate-btn" type="submit" value="Evaluate" disabled="true" />
                    : <input className="evaluate-btn" type="submit" value="Evaluate" />}
            </div>
        </div>
    );
}


export default Services

