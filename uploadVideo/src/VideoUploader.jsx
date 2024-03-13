import React, { useState } from 'react';

function VideoUploader() {
    const [videoBlob, setVideoBlob] = useState(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const blob = new Blob([file], { type: file.type });
            setVideoBlob(blob);
        }
    };

    // Function to upload Blob to S3
    const uploadToS3 = () => {
        // Make API call to upload the Blob to your server
        console.log('Starting upload to S3');   
        const formData = new FormData();
        formData.append('video', videoBlob);

        fetch('https://start-business.vercel.app/api/product/add', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to upload video to server');
            }
            return response.json();
        })
        .then(data => {
            console.log('Video uploaded to server:', data);
            // Call S3 upload logic if needed
            uploadToS3FromServer(data.videoUrl);
        })
        .catch(error => {
            console.error('Error uploading video to server:', error);
        });
    };

    // Function to upload Blob to S3 from server
    const uploadToS3FromServer = (videoUrl) => {
        // Your S3 upload logic using videoUrl
        console.log('Uploading video to S3 from server:', videoUrl);
        console.log('Ouploaded');
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="video/*" />
            <button onClick={uploadToS3}>Upload Video</button>
        </div>
    );
}

export default VideoUploader;