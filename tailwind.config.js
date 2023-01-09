/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './config/*.json', 
      './layout/*.liquid', 
      './assets/*.liquid', 
      './sections/*.liquid', 
      './snippets/*.liquid', 
      './templates/*.liquid', 
      './templates/*.json', 
      './templates/customers/*.liquid', 
      './templates/customers/*.json',
      './*.html'
    ],
    theme: {
      screens: {
        'ms': '320px',
        'mm': '480px',
        'ml': '568px',
        'ts': '768px',
        'tl': '868px',
        'ds': '1024px',
        'dm': '1200px',
        'dl': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          ds: '2.25rem',
          dm: '2.75rem',
          dl: '0',
        }
      },
      fontFamily: {
        'body': ['pretendard'],
      },
      extend: {
        borderRadius: {
          'cs': '0.625rem',
          'cl': '1.25rem',
        },
        boxShadow: {
          'sp': '0 4 10px 0 rgb(0, 0, 0, 0.16)',
        },
        colors: {
          'primary': '#0B84FB',
          'secondary': '#7992EB',
          'hover': '#27387A',
          'focus': '#5072FA',
          'text': '#231F20',
          'body': '#FAFAFA',
          'accent': '#FAA00A',
          'accent-2': '#d9d9d9',
          'accent-3': '#1D1D1D',
        },
        keyframes: {
          move: {
            '0%': { transform: 'translate(100%)' },
            '100%': { transform: 'translate(-100%)' },
          },
        },
        animation: {
          'x-left-move': 'move 15s linear infinite',
        },
        fontSize: {
          'title': ['2.5rem', {
            lineHeight: '1',
            letterSpacing: '0.025em',
            fontWeight: '800',
          }]
        },
        transitionProperty: {
          'visibility': 'visibility',
        },
        lineClamp: {
          7: '7',
          8: '8',
          9: '9',
          10: '10',
          11: '11',
          12: '12',
        }
      }
    }
  }