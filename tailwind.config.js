/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {fontSize: {
      'h1': '2.25rem', // 36px
      'h2': '1.875rem', // 30px
      'h3': '1.5rem', // 24px
      'h4': '1.25rem', // 20px
      'h5': '1rem', // 16px
      'h6': '0.875rem', // 14px
    },
    fontWeight: {
      'h1': '700',
      'h2': '600',
      'h3': '500',
      'h4': '400',
      'h5': '300',
      'h6': '200',
    }},
  },
  plugins: [],
}

