![maiden_tiedot_app](https://github.com/jkk-fullstack-projects/Country_information/assets/65396501/70501c9f-ba1f-44c3-a14f-f17454295cb7)

Please note! 
Works better in Safari and Firefox: Usually Chrome enforces strict http/https loading rules - leading to the situation where the weather info is not shown, unless your Chrome browser is configured to allow http/https loading.

The app requires two API-keys to work: Weatherstack API-key and Unsplash API-key.
They should be located in the .env file in the project root directory in this form and without quote marks:
VITE_APP_UNSPLASH_ACCESS_KEY=123456789123456789123456789
VITE_APP_WEATHERSTACK_ACCESS_KEY=123456789123456789123456789

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
