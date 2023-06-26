import React from 'react' 
import "../Styles/NotFound.css"


const NotFound = () => {
    return (
        <>
        <div className='not-found'>
            <div className='display-msg animate__animated animate__bounce'>
                <p className='text'>404 Error:</p>
                <p className='message'>This page took a wrong flight path. Our team of explorers is on the rescue mission!</p>
            </div>
        </div>
        </>

    );
}

export default NotFound;