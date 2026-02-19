import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Problem from './Problem';
import HowItWorks from './HowItWorks';
import Comparison from './Comparison';
import PhoneMockups from './PhoneMockups';
import FAQ from './FAQ';
import Waitlist from './Waitlist';

const Home = () => {
    return (
        <div className="antialiased selection:bg-red selection:text-paper">
            <Navbar />
            <Hero />
            <Problem />
            <HowItWorks />
            <Comparison />
            <PhoneMockups />
            <FAQ />
            <Waitlist />
        </div>
    );
};

export default Home;
