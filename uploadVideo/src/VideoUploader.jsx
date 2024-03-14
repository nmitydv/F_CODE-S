import React, { useState } from 'react';

function VideoUploader() {
    const [file, setFile] = useState(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Function to upload Blob to S3
    const uploadToS3 = (file) => {
        // Create a FormData object and append the file to it
        const formData = new FormData();
        formData.append('demo_video', file);
    
        // Make a direct POST request to S3 endpoint using fetch
        fetch('https://start-business.vercel.app/api/product/add/', {
            method: 'POST',
            body: formData, // Send the FormData object as the body of the request
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to upload video to S3');
            }
            console.log('Video uploaded successfully to S3');
        })
        .catch(error => {
            console.error('Error uploading video to S3:', error);
        });
    };
    // Function to handle button click
    const handleButtonClick = () => {
        if (file) {
            uploadToS3(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="video/*" />
            <button type="button" onClick={handleButtonClick}>Upload Video</button>
        </div>
    );
}

export default VideoUploader;
