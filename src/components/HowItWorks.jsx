import React from 'react';

const HowItWorks = () => {
    const stepsData = [
        {
            title: "Talk to Maktoob",
            content: "Have a private conversation with an AI that actually listens — your values, your dealbreakers, the stuff you'd never put in a bio.",
            image: "https://res.cloudinary.com/df1qocyat/image/upload/v1771144473/Untitled_design_5_hzw5kd.png",
            imgAlt: "Talk to Maktoob"
        },
        {
            title: "We find your person",
            content: "We only recommend matches worth your time. No browsing. No catalog of faces. Just quality.",
            image: "https://res.cloudinary.com/df1qocyat/image/upload/v1771144277/snap_jjxyaj.png",
            imgAlt: "We find your person"
        },
        {
            title: "Connect with intention",
            content: "When someone's right, we make the introduction. Your identity stays private until you say otherwise.",
            image: "https://res.cloudinary.com/df1qocyat/image/upload/v1771144741/Untitled_design_6_uxu1q4.png",
            imgAlt: "Connect with intention"
        }
    ];

    return (
        <section className="py-32 px-6 relative overflow-visible bg-[#bc226d]">
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-ink text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">The Process</span>
                    <h2 className="text-4xl md:text-6xl text-[#F0EAD6] font-neue-plak">A friend, not a platform.</h2>
                </div>

                <div className="flex flex-col gap-12 pb-32">
                    {stepsData.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-16 sticky transition-all duration-300"
                            style={{
                                top: `${150 + (index * 40)}px`,
                                zIndex: index + 1
                            }}
                        >
                            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'} order-2`}>
                                <h3 className="text-2xl text-magenta mb-3 font-bold uppercase tracking-wide">{step.title}</h3>
                                <p className="text-lg text-ink leading-relaxed">
                                    {step.content}
                                </p>
                            </div>
                            <div className={`w-full md:w-1/2 flex justify-center ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} order-1`}>
                                <div className="w-48 h-48 flex items-center justify-center">
                                    <img src={step.image} alt={step.imgAlt} className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
