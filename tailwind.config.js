module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            50: '50px',
            16: '4rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                regular: ['Averia Libre', 'cursive'],
                satisfy: ['Satisfy', 'cursive'],
            },

            colors: {
                'hci-footer': {
                    light: '#D0D0D0',
                    DEFAULT: '#8034AD',
                    dark: '#538793',
                },
                'hci-header': {
                    DEFAULT: '#538793',
                },
                'hci-cursive': {
                    DEFAULT: '#FFD600',
                },
                'hci-general': {
                    light: '#A0D4E0',
                    middle: '#86BAC6',
                    dark: '#538793',
                },
                'hci-white': {
                    DEFAULT: '#FFFFFF',
                },
            },
            backgroundImage: (theme) => ({
                'hero-cover': "url('assets/cover.png')",
                'fm-cover': "url('assets/fm-cover.png')",
            }),
            lineHeight: {
                3: '1.2rem',
                4: '1.6rem',
                5: '2.0rem',
                6: '2.4rem',
                7: '2.8rem',
                8: '3.2rem',
                9: '3.6rem',
                10: '4.0rem',
            },
            fontSize: {
                xs: ['1.2rem', { lineHeight: '1.6rem' }],
                sm: ['1.4rem', { lineHeight: '2.0rem' }],
                base: ['1.6rem', { lineHeight: '2.4rem' }],
                lg: ['1.8rem', { lineHeight: '2.8rem' }],
                xl: ['2.0rem', { lineHeight: '2.8rem' }],
                '2xl': ['2.4rem', { lineHeight: '3.2rem' }],
                '3xl': ['3.0rem', { lineHeight: '3.6rem' }],
                '4xl': ['3.6rem', { lineHeight: '4.0rem' }],
                '5xl': ['4.8rem', { lineHeight: '1' }],
                '6xl': ['6.0rem', { lineHeight: '1' }],
                '7xl': ['7.2rem', { lineHeight: '1' }],
                '8xl': ['9.6rem', { lineHeight: '1' }],
                '9xl': ['12.8rem', { lineHeight: '1' }],
            },
            borderWidth: {
                default: '1px',
                0: '0',
                2: '2px',
                3: '3px',
                4: '4px',
                6: '6px',
                8: '8px',
                50: '50px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
