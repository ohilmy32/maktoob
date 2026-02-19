/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Mapping legacy names to new palette variables for easier migration
                bg: 'var(--color-bg)',         // e.g. Grey #d3d3d0
                paper: 'var(--color-paper)',   // e.g. White or lighter grey
                ink: 'var(--color-ink)',       // e.g. Black #2a2b28
                red: 'var(--color-red)',       // e.g. Magenta #bd216d
                gold: 'var(--color-gold)',     // e.g. Yellow #ffe606 or Orange #f56131
                tape: 'var(--color-tape)',     // translucent
            },
            fontFamily: {
                'neue-plak': ['"Neue Plak Extended"', 'sans-serif'],
                // Legacy fonts mapping
                'special-elite': ['"Neue Plak Extended"', 'sans-serif'],
                'pinyon-script': ['"Neue Plak Extended"', 'sans-serif'], // Or keep pinyon if still desired for accents
                'amiri': ['"Neue Plak Extended"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
