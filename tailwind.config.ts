import type { Config } from 'tailwindcss'
const config: Config = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Public Sans"', 'sans-serif'],
            },
            fontSize: {
                '15px': ['15px', { lineHeight: '26px' }],
            },
            letterSpacing: {
                tightest: '-0.23px',
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--primary)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                },
            },
        },
    },
    plugins: [],
}
export default config
