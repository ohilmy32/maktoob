import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            // Optional: Timeout to allow navigation before scrolling could be added here
            // but for now simple navigation is safer
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleJoinClick = () => {
        setIsOpen(false);
        navigate('/join');
    };

    return (
        <nav className={`fixed top-0 w-full z-50 px-6 pt-2 pb-6 pointer-events-none transition-opacity duration-300 ${isVisible || isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-full flex justify-between items-start">
                {location.pathname === '/join' ? (
                    <button
                        onClick={() => navigate('/')}
                        className="mt-8 pointer-events-auto text-ink hover:text-[#f56131] transition-colors"
                        aria-label="Back to Home"
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                ) : (
                    <img
                        src="/maktoob-logo-text.png"
                        alt="Maktoob Logo"
                        onClick={() => navigate('/')}
                        className="-mt-2 h-36 md:h-[7.5rem] w-auto object-contain pointer-events-auto relative z-50 cursor-pointer"
                    />
                )}

                {location.pathname !== '/join' && (
                    <button
                        onClick={handleJoinClick}
                        className="hidden md:block mt-4 pointer-events-auto bg-white text-ink text-sm md:text-base px-6 py-3 rounded-full border-2 border-ink shadow-[3px_3px_0px_0px_#2a2b28] hover:translate-y-0.5 hover:shadow-none transition-all duration-200 font-bold uppercase tracking-wide"
                    >
                        JOIN WAITLIST
                    </button>
                )}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden mt-8 pointer-events-auto text-ink relative z-50 bg-transparent border-none p-2"
                >
                    {isOpen ? (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#f3efe9] z-40 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 pointer-events-auto">
                    <button
                        onClick={() => scrollToSection('faq')}
                        className="text-4xl text-ink font-neue-plak font-bold hover:text-[#f56131] transition-colors"
                    >
                        FAQ
                    </button>
                    <button
                        onClick={handleJoinClick}
                        className="text-4xl text-ink font-neue-plak font-bold hover:text-[#f56131] transition-colors"
                    >
                        WAITLIST
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
