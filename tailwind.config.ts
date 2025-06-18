import type { Config } from 'tailwindcss'
const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
            },
            fontSize: {
                '15px': ['15px', { lineHeight: '26px' }],
            },
            letterSpacing: {
                tightest: '-0.23px',
            },
            backgroundImage: {
                mobile: "url('/images/hero-mobile.svg')",
                desktop: "url('/images/hero-desktop.svg')",
                front: "url('/images/image-mockups.png')",
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                },
                highlight: {
                    DEFAULT: 'var(--highlight)',
                },
            },
        },
    },
    plugins: [],
}
export default config
