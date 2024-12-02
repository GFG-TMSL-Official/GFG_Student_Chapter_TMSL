import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Challenges from './components/Challenges';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time for preloader
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                <Hero />
                <About />
                <Team />
                <Gallery />
                <Events />
                <Challenges />
                <Blogs />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
