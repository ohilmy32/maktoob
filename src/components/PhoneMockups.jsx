import React from 'react';

const PhoneMockups = () => {
    return (
        <section className="py-32 px-6 bg-[#fa6737] overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-ink) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl text-ink font-neue-plak">Designed for intentionality.</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 perspective-1000 relative z-10">
                {/* Phone 1: Left */}
                <div className="w-72 h-[550px] transform md:translate-y-12 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 rounded-[2.5rem] overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/db0eup0v7/image/upload/v1771269394/3_e6demj.png"
                        alt="Maktoob Interface Left"
                        className="w-full h-full object-cover scale-[1.15]"
                    />
                </div>

                {/* Phone 2: Center (Main) */}
                <div className="w-72 h-[550px] z-10 transform scale-105 rotate-[2deg] hover:rotate-0 transition-transform duration-500 rounded-[2.5rem] overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/db0eup0v7/image/upload/v1771270222/Post_de_instagram_interaccio%CC%81n_redes_sociales_elegante_beige_fff6xt.png"
                        alt="Maktoob Interface Center"
                        className="w-full h-full object-cover scale-[1.15]"
                    />
                </div>

                {/* Phone 3: Right */}
                <div className="w-72 h-[550px] transform md:translate-y-12 rotate-[3deg] hover:rotate-0 transition-transform duration-500 rounded-[2.5rem] overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/db0eup0v7/image/upload/v1771269394/4_dkr7ak.png"
                        alt="Maktoob Interface Right"
                        className="w-full h-full object-cover scale-[1.15]"
                    />
                </div>
            </div>
        </section>
    );
};

export default PhoneMockups;
