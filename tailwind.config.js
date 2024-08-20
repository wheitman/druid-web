/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
  },

  fontFamily: {
    'sans': ['open-sans', 'sans-serif'],
    'mono': ["Noto Sans Mono", "monospace"]
  },
  extend: {
    colors: {
      cambridge: {
        '50': '#f2f7f4',
        '100': '#dfece2',
        '200': '#c2d8c9',
        '300': '#99bca6',
        '400': '#79a48a',
        '500': '#4b7e61',
        '600': '#38634c',
        '700': '#2d4f3d',
        '800': '#254032',
        '900': '#1f352a',
        '950': '#111d17',
      },
      clay: {
        '50': '#faf6ec',
        '100': '#f4e9cd',
        '200': '#ebd39d',
        '300': '#dfb465',
        '400': '#d5993d',
        '500': '#c5832d',
        '600': '#aa6524',
        '700': '#884920',
        '800': '#713d22',
        '900': '#613422',
        '950': '#381910',
      },
    },
    dropShadow: {
      'lg': '0px -3px 3px rgba(0, 0, 0, 0.15)',
    }
  },
  plugins: [function ({ addBase, theme }) {
    // This is a simple Tailwind plugin to expose all of Tailwind's colors, 
    // including any custom ones, as custom css properties on the :root element.
    function extractColorVars(colorObj, colorGroup = '') {
      return Object.keys(colorObj).reduce((vars, colorKey) => {
        const value = colorObj[colorKey];

        const newVars =
          typeof value === 'string'
            ? { [`--color${colorGroup}-${colorKey}`]: value }
            : extractColorVars(value, `-${colorKey}`);

        return { ...vars, ...newVars };
      }, {});
    }

    addBase({
      ':root': extractColorVars(theme('colors')),
    });
  },],
}

