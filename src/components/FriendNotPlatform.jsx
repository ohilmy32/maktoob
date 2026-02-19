import React from 'react';

const FriendNotPlatform = () => {
    return (
        <section className="py-24 px-6 bg-[#bc226d] pb-0">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl text-[#F0EAD6] font-neue-plak">A friend, not a platform.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1: Privacy */}
                    <div className="bg-[#f56131] p-8 rounded-3xl flex flex-col justify-between h-64 hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <h3 className="text-xl text-[#f0ead6] font-bold mb-2">Privacy</h3>
                            <p className="text-[#f0ead6]/90 text-sm leading-relaxed">Your face isn't data. We protect your identity until you're ready.</p>
                        </div>
                        <div className="flex justify-end">
                            <svg className="w-10 h-10 text-[#f0ead6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                    </div>

                    {/* Card 2: Values */}
                    <div className="bg-[#98e2ca] p-8 rounded-3xl flex flex-col justify-between h-64 hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <h3 className="text-xl text-[#2a2b28] font-bold mb-2">Values</h3>
                            <p className="text-[#2a2b28]/80 text-sm leading-relaxed">Deen over dopamine. Matches based on what truly matters.</p>
                        </div>
                        <div className="flex justify-end">
                            <svg className="w-10 h-10 text-[#2a2b28]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                    </div>

                    {/* Card 3: Support */}
                    <div className="bg-[#f0ead6] p-8 rounded-3xl flex flex-col justify-between h-64 hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <h3 className="text-xl text-[#2a2b28] font-bold mb-2">Support</h3>
                            <p className="text-[#2a2b28]/80 text-sm leading-relaxed">We're in your corner. Real humans helping you find your person.</p>
                        </div>
                        <div className="flex justify-end">
                            <svg className="w-10 h-10 text-[#2a2b28]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                    </div>

                    {/* Card 4: Honesty */}
                    <div className="bg-[#2a2b28] p-8 rounded-3xl flex flex-col justify-between h-64 hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <h3 className="text-xl text-[#F0EAD6] font-bold mb-2">Honesty</h3>
                            <p className="text-[#F0EAD6]/80 text-sm leading-relaxed">No algorithm tricks. No gamification. Just honest matchmaking.</p>
                        </div>
                        <div className="flex justify-end">
                            <svg className="w-10 h-10 text-[#F0EAD6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FriendNotPlatform;
