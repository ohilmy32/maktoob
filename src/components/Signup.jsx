import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from './Navbar';
import TypeformModal from './TypeformModal';
import WaitlistCounter from './WaitlistCounter';

const WAITLIST_API = 'https://script.google.com/macros/s/AKfycbwZqDyoHsC47ZjPLB5Mm8cShvV_mYReOiPEBW0fwnfy2RJ0UC5HJlVcjmik5m2Fupm6/exec';
const FALLBACK_COUNT = 1132;
const POLL_INTERVAL = 30000; // 30s

const Signup = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [geoCity, setGeoCity] = useState(null);
    const [waitlistCount, setWaitlistCount] = useState(FALLBACK_COUNT);
    const pollRef = useRef(null);

    const fetchCount = useCallback(async () => {
        try {
            const res = await fetch(WAITLIST_API);
            const data = await res.json();
            if (data.result === 'success' && typeof data.count === 'number') {
                return data.count;
            }
        } catch (err) {
            console.warn('Failed to fetch waitlist count:', err);
        }
        return null;
    }, []);

    // Initial fetch
    useEffect(() => {
        fetchCount().then(count => setWaitlistCount(count ?? FALLBACK_COUNT));
    }, [fetchCount]);

    // Poll every 30s so the counter stays in sync across users
    useEffect(() => {
        pollRef.current = setInterval(() => {
            fetchCount().then(count => {
                if (count !== null) setWaitlistCount(count);
            });
        }, POLL_INTERVAL);
        return () => clearInterval(pollRef.current);
    }, [fetchCount]);

    const handleFormSuccess = useCallback(() => {
        // Instant optimistic +1
        setWaitlistCount(prev => (prev || FALLBACK_COUNT) + 1);

        // Re-fetch the true server count after a short delay to let the
        // Google Apps Script finish writing the new row
        setTimeout(() => {
            fetchCount().then(count => {
                if (count !== null) setWaitlistCount(count);
            });
        }, 2500);
    }, [fetchCount]);

    useEffect(() => {
        const checkLocation = async () => {
            try {
                // Add checks and logging
                const response = await fetch('https://ipapi.co/json/');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                // const data = { city: 'Irvine', region_code: 'CA' }; // MOCK FOR SOCAL TEST

                if (!data || typeof data !== 'object') return;

                const { city, region_code } = data;

                // Ensure city is a string before setting state
                if (typeof city !== 'string') return;

                // Target Regions Logic
                const isNYC = city === 'New York';
                const isNJ = region_code === 'NJ';
                const isChicago = city === 'Chicago';
                const isDallas = city === 'Dallas';
                const isHouston = city === 'Houston';
                const isDMV = ['DC', 'MD', 'VA'].includes(region_code);

                // Southern California check
                const soCalCities = [
                    'Los Angeles', 'San Diego', 'Long Beach', 'Anaheim',
                    'Santa Ana', 'Riverside', 'Chula Vista', 'Irvine',
                    'San Bernardino', 'Oxnard', 'Fontana', 'Moreno Valley',
                    'Glendale', 'Huntington Beach', 'Santa Clarita', 'Garden Grove',
                    'Oceanside', 'Rancho Cucamonga', 'Ontario', 'Lancaster',
                    'Palmdale', 'Corona', 'Pomona', 'Torrance', 'Escondido',
                    'Pasadena', 'Orange', 'Fullerton', 'Thousand Oaks', 'El Monte',
                    'Simi Valley', 'Victorville', 'Downey', 'Costa Mesa',
                    'Inglewood', 'Ventura', 'West Covina', 'Norwalk', 'Carlsbad',
                    'Murrieta', 'Burbank', 'Temecula', 'Mission Viejo', 'Lake Forest',
                    'Santa Monica', 'Tustin'
                ];
                const isSoCal = region_code === 'CA' && soCalCities.includes(city);

                if (isSoCal) {
                    setGeoCity('Southern California');
                } else if (isNYC || isNJ || isChicago || isDallas || isHouston || isDMV) {
                    setGeoCity(city);
                }
            } catch (error) {
                // Silently fail for fetch errors to avoid disrupting UX
                console.warn('Geolocation failed:', error);
            }
        };

        checkLocation();
    }, []);

    return (
        <div className="min-h-screen bg-[#f3efe9] flex flex-col font-neue-plak">
            <Navbar />

            <TypeformModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={handleFormSuccess}
            />

            <div className="flex-grow flex items-center justify-center px-6 pt-32 pb-12">
                <div className="max-w-2xl w-full space-y-12">
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold text-ink tracking-tight leading-[0.9]">
                            Maktoob is here.
                        </h1>
                        <div className="space-y-6 text-xl md:text-2xl text-ink/80 font-medium leading-relaxed font-airbnb">
                            <p>
                                We built something different. Not another swipe factory. Not another marriage resume database. Maktoob is the friend who actually knows you, helping you find someone worth finding.
                            </p>

                            {geoCity && (
                                <p className="text-[#f56131] font-bold">
                                    We’re launching quietly in {geoCity} first. We believe something this meaningful deserves a strong beginning.
                                </p>
                            )}

                            <p>
                                We're opening the doors for our beta, and for a limited time, it's completely free. No catch. No credit card. Just early access to something we think you've been waiting for.
                            </p>
                            <p>
                                Here's the deal: once we open to everyone, free access closes. First invites go out on the 10th night of Ramadan, and we're capping the beta at 10,000 seekers. After that, the door closes.
                            </p>
                            <p>
                                So if you're tired of apps that don't get it, get on the list. Maktoob is ready. The question is, are you?
                            </p>
                        </div>
                    </div>



                    <div className="w-full">
                        <WaitlistCounter count={waitlistCount} />
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-[#f56131] text-white text-xl font-bold uppercase tracking-wider py-5 rounded-full hover:bg-[#d44d22] transition-colors shadow-lg"
                        >
                            GET ON THE LIST
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;
