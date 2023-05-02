 



import React, { useState, useEffect, useRef } from 'react';
import './Change.css'

const Change = () => {
    const [imageUrl, setImageUrl] = useState('');
    const fileInputRef = useRef(null);
    const [counter, setCounter] = useState(0);



    // useeffect  
  

    useEffect(() => {
       
        loadImage();
    }, [counter]);

    // storing the data


    const loadImage = () => {
        // Load the image from the URL
        const newImageUrl = `https://picsum.photos/700/400?grayscale${counter}`;
        setImageUrl(newImageUrl);
    };

    // count the vairable

    const handleButtonClick = () => {
        
        setCounter(counter + 1);
    };

  
    const handleFileInputChange = () => {
        fileInputRef.current.click()
        
             setImageUrl( imageUrl);
 
       
       
    };
    return (
        <div className=' main'>
            <div className=' img'>
                <img src={imageUrl} alt="Selected" />
                
                <br />
                <button onClick={handleButtonClick}>Change Image</button>
                <h1> No of times image clicked   {counter}</h1>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                />
            </div>
        </div>
    )
}

export default Change