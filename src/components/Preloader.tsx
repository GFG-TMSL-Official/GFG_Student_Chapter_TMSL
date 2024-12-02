import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
    const [text, setText] = useState('');
    const loadingMessages = ['Welcome Geeks!']; // Your messages
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        let typingIndex = 0;

        const typeEffect = () => {
            if (typingIndex < loadingMessages[messageIndex].length) {
                // Add the next character to the text
                setText((prev) => prev + loadingMessages[messageIndex][typingIndex]);
                typingIndex++;
            } else {
                // Pause after completing the message
                setTimeout(() => {
                    setText(''); // Clear the text
                    typingIndex = 0; // Reset typing index
                    // Only change the messageIndex if there are multiple messages
                    if (loadingMessages.length > 1) {
                        setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
                    }
                }, 1000); // 1-second pause
            }
        };

        // Start typing effect
        const typingInterval = setInterval(typeEffect, 150);

        // Clean up the interval on component unmount
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
