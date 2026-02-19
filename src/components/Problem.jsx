import React from 'react';


const Problem = () => {
    return (
        <section className="py-24 px-6 relative bg-[#f0ead6]">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-20 text-center relative max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl text-ink mb-4 leading-tight font-neue-plak">
                        We've all been there. The swipe fatigue, the awkward small talk, the ghosting. <span className="text-red">Maktoob is built different because you are different.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Illustration */}
                    <div className="flex justify-center">
                        <img
                            src="https://res.cloudinary.com/db0eup0v7/image/upload/v1771220625/Untitled_design_7_tia1pp.png"
                            alt="Friends standing together"
                            className="w-full object-contain"
                        />
                    </div>

                    {/* Right Column: Cards */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#f46232] border-4 border-ink rounded-3xl p-8 relative shadow-[6px_6px_0px_0px_#2a2b28]">
                            <p className="text-xl leading-relaxed text-[#f0ead6] font-airbnb">
                                You downloaded the app. You wrote the bio. You picked the photo where you look approachable but not too approachable. You swiped. You got ghosted.
                            </p>
                        </div>

                        <div className="bg-[#99e2ca] border-4 border-ink rounded-3xl p-8 relative shadow-[6px_6px_0px_0px_#2a2b28]">
                            <p className="text-xl leading-relaxed text-ink font-airbnb">
                                You told yourself 'maybe it's me.' It's not you. It's an industry that makes money when you stay single. It's designed to keep you searching.
                            </p>
                        </div>

                        <div className="bg-[#fba1a1] border-4 border-ink rounded-3xl p-8 relative shadow-[6px_6px_0px_0px_#2a2b28]">
                            <p className="text-xl leading-relaxed text-ink font-airbnb">
                                You're not a 3am swipe between a TikTok recipe and a Fajr alarm. You deserve intention. Maktoob was built for that.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
