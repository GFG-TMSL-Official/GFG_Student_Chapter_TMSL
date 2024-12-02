import React from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
    return (
        <div className="preloader">
            <div className="preloader-spinner"></div>
            <p className="preloader-text">Welcome to the Tech World...</p>
        </div>
    );
};

export default Preloader;
