/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Helvetica","Arial","Apple Color Emoji","Segoe UI Emoji"
        ],
        mono: [
          "ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas","Liberation Mono","Courier New","monospace"
        ]
      }
    }
  },
  plugins: []
};
