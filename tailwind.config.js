/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./index.html"
  ],
  theme: {
    extend: {
      screens:{
        'desktop':{'min':'1024px'},
        'tablet':{'min':'768px','max':'1024px'},
        'mobile':{'min':'320px','max':'767px'}
      },
      fontFamily: {
        'sans': 'Trebuchet MS, Helvetica, sans-serif'
      },
    },
  },
  plugins: [],
}

