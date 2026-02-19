import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-white rounded-xl mb-4 overflow-hidden transition-all duration-300 shadow-sm border border-transparent hover:border-[#f56131]/20">
            <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={onClick}
            >
                <span className="text-xl md:text-2xl text-ink font-neue-plak">{question}</span>
                <span className={`transform transition-transform duration-300 ml-4 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-8 h-8 text-[#d3d3d0]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-8 pb-8 text-ink/70 leading-relaxed text-lg font-airbnb">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is Maktoob?",
            answer: "Maktoob is an AI-powered matchmaking app built for Muslims who are serious about marriage. Think of it as a friend who knows you well and introduces you to the right people, not a platform that throws you into an endless sea of profiles."
        },
        {
            question: "Is my profile private?",
            answer: "Yes. Unlike other apps, we don't broadcast your profile to thousands of strangers. We only share your profile with people who meet your criteria and who we genuinely think are relevant to you. Your information stays protected until there's a real reason to share it."
        },
        {
            question: "What countries are you available in?",
            answer: "We're launching our beta in the US, with major markets in Canada and the UK coming soon after. We'll be coming to a market near you soon. Sign up for the waitlist so you're first to know."
        },
        {
            question: "How does matching work?",
            answer: "You have a conversation with Maktoob. It asks you all sorts of questions about who you are, what you value, and what you're looking for. From there, it recommends people with high overlap. You can only talk to the other person if both parties opt in. No unsolicited messages, no awkward browsing."
        },
        {
            question: "How is this different from existing apps?",
            answer: "No swipe fatigue. No algorithm designed to keep you scrolling. Maktoob is designed for you to leave the app, that means we did our job. We also don't send you one person a month and call it \"curated.\" You get real, relevant matches, and people's intentions are clear from the start."
        },
        {
            question: "Is it free?",
            answer: "Maktoob is free to use. We only charge when you want to jump on a video call with someone you truly want to meet."
        },
        {
            question: "When is this launching?",
            answer: "March 2026. Join the waitlist to get early access."
        }
    ];

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="py-24 px-6 bg-[#98e2ca]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl text-ink font-neue-plak mb-4">
                        Got questions? <br />
                        Here's the answers.
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
