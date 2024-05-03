module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  "scripts": {
    "start": "npx tailwindcss -i ./src/tailwind.css -o ./src/global.css && npx react-scripts start",
    "build": "npx tailwindcss -i ./src/tailwind.css -o ./src/global.css && npx react-scripts build"
  }
}
