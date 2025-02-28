import React, { useState } from 'react';

function Profile() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = () => {
    //     const formData = new FormData();
    //     formData.append('image', image);

    //     axios.post('http://localhost:8000/upload', formData)
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.error('There was an error uploading the image!', error);
    //         });
    };

    return (
        <div>
            <h1>Profile Page</h1>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload Image</button>
        </div>
    );
}

export default Profile;
