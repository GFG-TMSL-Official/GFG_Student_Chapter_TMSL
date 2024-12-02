import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
    const [text, setText] = useState('');
    const loadingMessages = [
        'Initializing...',
        'Compiling Modules...',
        'Connecting to Server...',
        'Loading Resources...',
    ];
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        let typingIndex = 0;

        const typeEffect = () => {
            if (typingIndex < loadingMessages[messageIndex].length) {
                setText((prev) => prev + loadingMessages[messageIndex][typingIndex]);
                typingIndex++;
            } else {
                setTimeout(() => {
                    setText('');
                    typingIndex = 0;
                    setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
                }, 1000); // Pause before switching to the next message
            }
        };

        const typingInterval = setInterval(typeEffect, 100);

        return () => clearInterval(typingInterval);
    }, [messageIndex]);

    return (
        <div className="preloader">
            <div className="preloader-content">
                <p className="typing-text">{text}<span className="cursor"></span></p>
            </div>
        </div>
    );
};

export default Preloader;
