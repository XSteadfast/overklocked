// Tailwind build config. Rebuild css/tailwind.css after adding new Tailwind classes:
//   npm run build:css      (or  npm run watch:css  while editing)
// Brand colours live in css/style.css as CSS variables; these mirror them for utility classes.
module.exports = {
    content: ['./*.html', './js/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                display: ['"Chakra Petch"', 'sans-serif'],
            },
            colors: {
                gaming: {
                    black: '#08090c',
                    dark: '#0f1116',
                    card: '#161a22',
                    lightblue: '#2fb4ff',
                    blue: '#1e7bff',
                    gray: '#aab3c2',
                },
            },
        },
    },
};
