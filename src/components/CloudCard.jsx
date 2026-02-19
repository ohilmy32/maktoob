import React from 'react';

const CloudCard = ({ children, className = "" }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* Image Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <img
                    src="https://res.cloudinary.com/df1qocyat/image/upload/v1771215546/Untitled_design_7_maacnk.png"
                    alt="Cloud Background"
                    className="w-full h-full object-fill drop-shadow-md"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 py-12 text-center flex items-center justify-center max-w-[80%] mx-auto">
                {children}
            </div>
        </div>
    );
};

export default CloudCard;
