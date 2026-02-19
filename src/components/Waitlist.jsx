import React from 'react';
import { useNavigate } from 'react-router-dom';

const Waitlist = () => {
    const navigate = useNavigate();

    return (
        <section id="waitlist" className="py-24 px-6 bg-[#bd216d]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl text-white font-neue-plak mb-6 tracking-tight">
                    It's written. <span className="text-[#f56131]">Are you ready?</span>
                </h2>

                <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join the waitlist. We'll reach out when it's your turn — the way Maktoob does everything. Intentionally.
                </p>

                <div className="flex justify-center max-w-md mx-auto mb-10 text-center">
                    <button
                        onClick={() => { navigate('/join'); window.scrollTo(0, 0); }}
                        className="bg-[#f56131] text-white font-bold uppercase tracking-wide px-10 py-4 rounded-full hover:bg-[#d44d22] transition-colors duration-300 shadow-lg whitespace-nowrap"
                    >
                        FIND WHAT'S WRITTEN FOR YOU
                    </button>
                </div>

                <p className="text-sm text-white/70 italic font-neue-plak">
                    No spam. No selling your email. We're not like those other apps, remember?
                </p>

                <a
                    href="https://www.instagram.com/heymaktoob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden inline-block mt-6"
                    aria-label="Follow us on Instagram"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
                        <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Waitlist;
