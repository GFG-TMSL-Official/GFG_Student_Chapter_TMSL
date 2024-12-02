import React from 'react';
import './Preloader.css'; // Import the CSS file for styling

const Preloader: React.FC = () => {
    return (
        <div className="preloader">
            <div className="spinner"></div>
        </div>
    );
};

export default Preloader;

