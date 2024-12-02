import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
    const [text, setText] = useState('');
    const loadingMessages = ['Welcome Geeks!']; // Your messages
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        let typingIndex = 0;
        let isTyping = true; // Track typing state

        const typeEffect = () => {
            if (isTyping) {
                if (typingIndex < loadingMessages[messageIndex].length) {
                    setText((prev) => prev + loadingMessages[messageIndex][typingIndex]);
                    typingIndex++;
                } else {
                    isTyping = false;
                    setTimeout(() => {
                        isTyping = true;
                        setText('');
                        typingIndex = 0;

                        // Only increment the message index if there is more than one message
                        if (loadingMessages.length > 1) {
                            setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
                        }
                    }, 1000); // Pause before resetting text
                }
            }
        };

        const typingInterval = setInterval(typeEffect, 100);

        return () => clearInterval(typingInterval);
    }, [messageIndex, loadingMessages]);

    return (
        <div className="preloader">
            <div className="preloader-content">
                <p className="typing-text">{text}<span className="cursor"></span></p>
            </div>
        </div>
    );
};

export default Preloader;
