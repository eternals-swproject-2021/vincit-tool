// import React from 'react'
// import './fileUpload.scss'
// import axios from 'axios'

// const FileUpload = ({ files, setFiles, removeFile }) => {
//     const uploadHandler = (event) => {
//         const file = event.target.files[0];
//         if (!file) return;
//         file.isUploading = true;
//         setFiles([...files, file])

//         const formData = new FormData();
//         formData.append(
//             "newFile",
//             file,
//             file.name
//         )

//         axios.post('http://localhost:8080/upload', formData)
//             .then((res) => {
//                 file.isUploading = false;
//                 setFiles([...files, file])
//             })
//             .catch((err) => {
//                 console.error(err)
//                 removeFile(file.name)
//             });
//     }

//     return (
//         <div>
//             <div className="file-card">
//                 <div className="header-p">
//                     <p className="main">Supports: </p>
//                     <p className="info">.JPG /.PNG </p>
//                 </div>
//                 <input type="file" accept="image/x-png,image/jpg,image/jpeg" onChange={uploadHandler} />
//             </div>
//         </div>
//     )
// }

// export default FileUpload