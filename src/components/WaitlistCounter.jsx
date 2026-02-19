import React, { useEffect, useState, useRef } from 'react';

const WaitlistCounter = ({ count }) => {
    const [displayCount, setDisplayCount] = useState(0);
    const startTimestamp = useRef(null);
    const startValue = useRef(0);
    const prevCount = useRef(null);
    const rafId = useRef(null);

    useEffect(() => {
        if (count === null || count === undefined) return;

        const cappedCount = Math.min(count, 9999);

        // Cancel any in-progress animation
        if (rafId.current) cancelAnimationFrame(rafId.current);

        const diff = Math.abs(cappedCount - (prevCount.current ?? 0));
        // Fast animation for small increments (+1 after submit), slow for initial load
        const duration = diff <= 5 ? 400 : 2000;
        prevCount.current = cappedCount;

        startValue.current = displayCount;
        startTimestamp.current = null;

        const step = (timestamp) => {
            if (!startTimestamp.current) startTimestamp.current = timestamp;
            const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(startValue.current + (cappedCount - startValue.current) * ease);
            setDisplayCount(current);

            if (progress < 1) {
                rafId.current = window.requestAnimationFrame(step);
            } else {
                setDisplayCount(cappedCount);
                rafId.current = null;
            }
        };

        rafId.current = window.requestAnimationFrame(step);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [count]);

    if (!count) return null;

    const digits = Math.min(displayCount, 9999).toString().split('');

    return (
        <div className="flex flex-col items-center justify-center mb-10 animate-fade-in">
            <div className="flex items-center gap-2 md:gap-3">
                {digits.map((char, index) => (
                    <div key={index} className="relative bg-[#1a1a1a] text-[#f3efe9] rounded-lg md:rounded-xl shadow-xl w-14 md:w-20 h-20 md:h-28 flex items-center justify-center overflow-hidden">
                        {/* Top half highlight for depth */}
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5 z-10 pointer-events-none border-b border-black/20"></div>

                        {/* Split line */}
                        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#000000]/40 z-20 shadow-sm w-full"></div>

                        <span className="text-5xl md:text-7xl font-bold font-neue-plak tracking-tighter z-0 leading-none pb-1 relative">
                            {char}
                        </span>
                    </div>
                ))}
            </div>

            <p className="text-ink/60 font-airbnb text-xs md:text-sm uppercase tracking-[0.2em] mt-4 font-bold">
                Have Registered
            </p>
        </div>
    );
};

export default WaitlistCounter;
