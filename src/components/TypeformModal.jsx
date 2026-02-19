import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { majorCities } from '../constants/cities';
import { ethnicities } from '../constants/ethnicities';

const questions = [
    {
        id: 'name',
        type: 'text',
        question: 'What is your full name?',
        placeholder: 'Jane Doe',
        buttonText: 'Next'
    },
    {
        id: 'gender',
        type: 'selection',
        question: 'What is your gender?',
        options: [
            { label: 'Male', image: 'https://res.cloudinary.com/db0eup0v7/image/upload/v1771376661/17_kjenno.png' },
            { label: 'Female', image: 'https://res.cloudinary.com/db0eup0v7/image/upload/v1771376661/16_yjrz9x.png' }
        ],
        buttonText: 'Next'
    },
    {
        id: 'age',
        type: 'text',
        subtype: 'number',
        question: 'How old are you?',
        placeholder: '25',
        buttonText: 'Next'
    },
    {
        id: 'email',
        type: 'email',
        question: "What's your email address?",
        placeholder: 'name@example.com',
        buttonText: 'Next'
    },
    {
        id: 'city',
        type: 'text',
        question: 'Which city do you currently live in?',
        placeholder: 'Los Angeles',
        buttonText: 'Next'
    },
    {
        id: 'ethnicity',
        type: 'text',
        question: "What's your ethnicity?",
        placeholder: 'Palestinian, Pakistani, Somali',
        mobilePlaceholder: '',
        buttonText: 'Submit'
    }
];

const TypeformModal = ({ isOpen, onClose, onSuccess }) => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({
        name: '',
        gender: '',
        age: '',
        email: '',
        city: '',
        ethnicity: ''
    });
    const [isExiting, setIsExiting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef(null);

    // Auto-focus input on step change
    useEffect(() => {
        if (isOpen && !isSubmitted && inputRef.current) {
            // Small timeout to allow transition to finish
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [currentStep, isOpen, isSubmitted]);

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            setCurrentStep(0);
            setIsSubmitted(false);
            setError('');
            setAnswers({
                name: '',
                gender: '',
                age: '',
                email: '',
                city: '',
                ethnicity: ''
            });
        }
    }, [isOpen]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setAnswers(prev => ({ ...prev, [questions[currentStep].id]: value }));
        if (error) setError('');

        // Autocomplete Logic (City & Ethnicity)
        const currentId = questions[currentStep].id;
        let sourceData = [];

        if (currentId === 'city') sourceData = majorCities;
        if (currentId === 'ethnicity') sourceData = ethnicities;

        if (sourceData.length > 0) {
            if (value.length > 0) {
                const filtered = sourceData.filter(item =>
                    item.toLowerCase().includes(value.toLowerCase())
                ).slice(0, 5); // Limit to top 5
                setFilteredSuggestions(filtered);
                setShowSuggestions(true);
            } else {
                setShowSuggestions(false);
            }
        } else {
            setShowSuggestions(false); // Hide suggestions if not an autocomplete field
        }
    };

    const handleSuggestionSelect = (value) => {
        setAnswers(prev => ({ ...prev, [questions[currentStep].id]: value }));
        setShowSuggestions(false);
        // Optional: Auto-advance or focus button? For now just fill.
        inputRef.current?.focus();
    };

    const handleOptionSelect = (option) => {
        setAnswers(prev => ({ ...prev, [questions[currentStep].id]: option }));
        // Auto advance on selection
        setTimeout(handleNext, 300);
    };

    const handleNext = (e) => {
        if (e) e.preventDefault();
        if (isSubmitting) return;

        // Basic validation
        const currentQ = questions[currentStep];
        if (!answers[currentQ.id]) return; // Don't advance if empty

        // Age Validation
        if (currentQ.id === 'age') {
            const age = parseInt(answers.age, 10);
            if (isNaN(age) || age < 18) {
                setError('You must be 18 or older to join.');
                return;
            }
        }

        if (currentStep < questions.length - 1) {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentStep(prev => prev + 1);
                setIsExiting(false);
                setError('');
            }, 300);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);
        console.log("Form Submitted:", answers);

        try {
            const params = new URLSearchParams();
            Object.keys(answers).forEach(key => params.append(key, answers[key]));

            fetch('https://script.google.com/macros/s/AKfycbwZqDyoHsC47ZjPLB5Mm8cShvV_mYReOiPEBW0fwnfy2RJ0UC5HJlVcjmik5m2Fupm6/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString()
            });

            // Don't await the no-cors fetch — it's opaque and slow.
            // Show the thank-you screen immediately.
            setIsSubmitted(true);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleNext(e);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3efe9]">
            {/* Back Button */}
            {currentStep > 0 && !isSubmitted && (
                <button
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="absolute top-6 left-6 md:top-12 md:left-12 text-ink/40 hover:text-ink transition-colors z-50"
                    aria-label="Go back"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 md:top-12 md:right-12 text-ink/40 hover:text-ink transition-colors z-50 text-xl font-bold font-neue-plak"
            >
                CLOSE
            </button>

            {/* Progress Bar */}
            {!isSubmitted && (
                <div className="absolute top-0 left-0 h-1 bg-[#f56131] transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                />
            )}

            <div className="w-full max-w-2xl px-6 relative">
                {isSubmitted ? (
                    <div className="text-center animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 font-neue-plak">
                            Thank you for joining Maktoob.
                        </h2>
                        <p className="text-xl md:text-2xl text-ink/70 font-airbnb mb-12 max-w-lg mx-auto leading-relaxed">
                            We’re grateful you’re here. You’ll be the first to know when your access is ready and you’re invited off the waitlist.
                        </p>
                        <button
                            onClick={() => {
                                onClose();
                                navigate('/');
                                window.scrollTo(0, 0);
                            }}
                            className="bg-[#f56131] text-white text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-[#d44d22] transition-colors shadow-lg"
                        >
                            Return Home
                        </button>
                    </div>
                ) : (
                    <div className={`transition-all duration-300 ease-in-out transform ${isExiting ? '-translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
                        {/* Question Number */}
                        <div className="flex items-center gap-3 text-[#fba1a1] font-bold mb-6 font-neue-plak">
                            <span className="text-lg">
                                {currentStep + 1}
                                <span className="text-ink/30 mx-1">/</span>
                                {questions.length}
                            </span>
                        </div>

                        {/* Question Text */}
                        <h2 className="text-3xl md:text-5xl font-bold text-ink mb-12 font-neue-plak leading-tight">
                            {questions[currentStep].question}
                        </h2>

                        {/* Input Area */}
                        <div className="w-full">
                            {questions[currentStep].type === 'selection' ? (
                                <div className="flex gap-6 justify-center">
                                    {questions[currentStep].options.map((option) => (
                                        <button
                                            key={option.label}
                                            onClick={() => handleOptionSelect(option.label)}
                                            className={`
                                                relative w-48 h-64 rounded-2xl border-4 transition-all duration-200 overflow-hidden group bg-white shadow-sm
                                                ${answers[questions[currentStep].id] === option.label
                                                    ? 'border-[#f56131] ring-4 ring-[#f56131]/20 transform scale-105'
                                                    : 'border-transparent hover:border-[#f56131]/50 hover:scale-105 shadow-md'}
                                            `}
                                        >
                                            <img
                                                src={option.image}
                                                alt={option.label}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 p-4 pb-6 text-center pointer-events-none">
                                                <span className="text-ink font-bold font-neue-plak text-xl uppercase tracking-widest">
                                                    {option.label}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="relative group">
                                    <input
                                        ref={inputRef}
                                        type={questions[currentStep].subtype || 'text'}
                                        value={answers[questions[currentStep].id]}
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyDown}
                                        placeholder={questions[currentStep].mobilePlaceholder && window.innerWidth < 768 ? questions[currentStep].mobilePlaceholder : questions[currentStep].placeholder}
                                        className={`w-full bg-transparent border-b-2 py-4 text-3xl md:text-4xl placeholder-ink/20 outline-none font-neue-plak transition-colors
                                            ${error ? 'border-red-500 text-red-500' : 'border-ink/20 text-[#f56131] focus:border-[#f56131]'}
                                        `}
                                        autoComplete={['city', 'ethnicity'].includes(questions[currentStep].id) ? 'off' : 'on'}
                                    />

                                    {/* Autocomplete Dropdown */}
                                    {['city', 'ethnicity'].includes(questions[currentStep].id) && showSuggestions && filteredSuggestions.length > 0 && (
                                        <div className="absolute top-full left-0 w-full bg-white border border-ink/10 rounded-xl shadow-xl z-50 mt-2 max-h-60 overflow-y-auto">
                                            {filteredSuggestions.map((suggestion, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleSuggestionSelect(suggestion)}
                                                    className="w-full text-left px-6 py-4 text-xl text-ink hover:bg-[#f3efe9] transition-colors font-neue-plak border-b border-ink/5 last:border-0"
                                                >
                                                    {suggestion}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {error ? (
                                        <p className="mt-4 text-sm text-red-500 font-bold font-airbnb animate-shake">
                                            {error}
                                        </p>
                                    ) : (
                                        <p className="mt-4 text-sm text-ink/40 font-airbnb">
                                            Press <span className="font-bold">Enter ↵</span>
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="mt-12 flex items-center justify-end gap-4">
                                <button
                                    onClick={handleNext}
                                    disabled={!answers[questions[currentStep].id] || isSubmitting}
                                    className={`
                                        bg-[#f56131] text-white text-xl font-bold uppercase tracking-wider px-8 py-3 rounded-full
                                        hover:bg-[#d44d22] transition-all shadow-lg flex items-center gap-2
                                        ${(!answers[questions[currentStep].id] || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
                                    `}
                                >
                                    {isSubmitting ? 'Submitting...' : questions[currentStep].buttonText}
                                    {currentStep < questions.length - 1 && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </button>

                                {/* Only show Submit on the last step, but handled by handleNext logic mostly */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default TypeformModal;
