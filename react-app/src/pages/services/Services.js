import { React, useState, Component } from 'react'
import FileUpload from '../../components/fileUpload/FileUpload';
import FileList from '../../components/fileList/FileList';
import LoadingSpinner from '../../components/loadingPage/LoadingSpinner';
import './services.css';

const Services = () => {
    const [files, setFiles] = useState([])

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
    }

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFetch = () => {
        setIsLoading(true);
        fetch("https://color-contrast.free.beeceptor.com")
            .then((respose) => respose.json())
            .then((respose) => {
                setUsers(respose.data)
                setIsLoading(false)
                // Optional code to simulate delay
                setTimeout(() => {
                  setUsers(respose.data);
                  setIsLoading(false);
                }, 3000);
            })
            .catch(() => {
                // setErrorMessage("Unable to fetch user list");
                setIsLoading(true);
            });
    };

    const renderUser = (
        <div className="userlist-container">
            {users.map((item, index) => (
                <div className="user-container" key={index}>
                    <img src={item.avatar} alt="" />
                    <div className="userDetail">
                        <div className="first-name">{`${item.first_name}                
                                       ${item.last_name}`}</div>
                        <div className="last-name">{item.email}</div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div>
         <h1 className="headline">Check Contrast</h1>
           <div class="px-4 text-center" className="upload-form">
                <FileUpload files={files} setFiles={setFiles}
                    removeFile={removeFile} />
                     <FileList className="file-list" files={files} removeFile={removeFile} />
            </div>
           
            <div>
                {files.length === 0
                    ? <input className="evaluate-btn" type="submit" value="Evaluate" disabled="true" />
                    : <input className="evaluate-btn" type="submit" value="Evaluate" onClick={handleFetch} disabled={isLoading}/>}
            </div>
            {isLoading ? <LoadingSpinner /> : renderUser}
            {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
    );
}


export default Services

