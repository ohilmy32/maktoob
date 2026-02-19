import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-[#faa1a1]">



            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-ink leading-[1.1] fade-in-up relative font-neue-plak font-bold mb-6">
                    Your person is <br />
                    <span className="text-red">already written.</span><br />
                    Let's find them.
                </h1>

                <div className="max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-ink leading-relaxed fade-in-up delay-100 font-neue-plak px-4">
                        Maktoob is the matchmaker you wish existed — one that actually knows you before it introduces you to anyone.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 fade-in-up delay-200 pt-8">
                    <button
                        onClick={() => navigate('/join')}
                        className="bg-[#e6c8b4] text-ink text-xl px-10 py-5 rounded-full border-4 border-ink shadow-[6px_6px_0px_0px_#2a2b28] hover:translate-y-1 hover:shadow-none transition-all duration-200 font-bold uppercase tracking-wide"
                    >
                        <span className="md:hidden">JOIN THE WAITLIST</span>
                        <span className="hidden md:inline">JOIN THE WAITLIST</span>
                    </button>
                    <div className="mt-4">
                        <span className="text-xs uppercase tracking-widest text-ink/70 font-bold">
                            No profiles. No swiping. No shame spiral.
                        </span>
                    </div>
                </div>
            </div>


        </header>
    );
};

export default Hero;
