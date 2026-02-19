import React from 'react';

const Comparison = () => {
    return (
        <section className="py-24 px-6 bg-[#d2d1cf]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl text-center mb-16 font-neue-plak font-bold text-[#2a2b28]">
                    <span className="text-[#f56131] italic font-serif mr-4">Maktoob</span>
                    <span className="text-2xl align-middle text-[#2a2b28] opacity-70 italic font-serif mr-4">vs</span>
                    The Other Apps
                </h2>

                <div className="border-2 border-[#2a2b28] rounded-3xl overflow-hidden bg-[#e6c8b4] shadow-[8px_8px_0px_0px_#2a2b28]">
                    {/* Header Row */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b-2 border-[#2a2b28] text-[#2a2b28] text-xs font-neue-plak font-bold uppercase tracking-widest">
                        <div className="col-span-8 md:col-span-6">Feature</div>
                        <div className="col-span-2 md:col-span-3 text-center text-[#bd216d] font-neue-plak font-black tracking-widest">
                            <span className="md:hidden">US</span>
                            <span className="hidden md:inline">MAKTOOB</span>
                        </div>
                        <div className="col-span-2 md:col-span-3 text-center font-neue-plak opacity-40 tracking-widest">THEM</div>
                    </div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b-2 border-[#2a2b28] items-center hover:bg-[#dabba2] transition-colors duration-200">
                        <div className="col-span-8 md:col-span-6 text-lg md:text-xl text-[#2a2b28] font-neue-plak font-bold">Knows you before it introduces you to anyone</div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#f56131]">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#2a2b28] opacity-20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b-2 border-[#2a2b28] items-center hover:bg-[#dabba2] transition-colors duration-200">
                        <div className="col-span-8 md:col-span-6 text-lg md:text-xl text-[#2a2b28] font-neue-plak font-bold">Your face isn't on a shelf for strangers to browse at 2am</div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#f56131]">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#2a2b28] opacity-20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b-2 border-[#2a2b28] items-center hover:bg-[#dabba2] transition-colors duration-200">
                        <div className="col-span-8 md:col-span-6 text-lg md:text-xl text-[#2a2b28] font-neue-plak font-bold">No swiping. Not even a little. Not even once.</div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#f56131]">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#2a2b28] opacity-20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b-2 border-[#2a2b28] items-center hover:bg-[#dabba2] transition-colors duration-200">
                        <div className="col-span-8 md:col-span-6 text-lg md:text-xl text-[#2a2b28] font-neue-plak font-bold">Won't guilt-trip you for not logging in</div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#f56131]">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#2a2b28] opacity-20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 border-b-2 border-[#2a2b28] items-center hover:bg-[#dabba2] transition-colors duration-200">
                        <div className="col-span-8 md:col-span-6 text-lg md:text-xl text-[#2a2b28] font-neue-plak font-bold">Treats your search like it's sacred — because it is</div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#f56131]">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#2a2b28] opacity-20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>

                    {/* Footer Row */}
                    <div className="grid grid-cols-12 gap-4 p-6 md:p-8 items-center bg-[#bd216d]">
                        <div className="col-span-8 md:col-span-6 text-xl md:text-2xl text-[#e6c8b4] font-black font-neue-plak uppercase">Built to help you leave the app, not live on it</div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#e6c8b4]">
                            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div className="col-span-2 md:col-span-3 flex justify-center text-[#2a2b28] opacity-20">
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
