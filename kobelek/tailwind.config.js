/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                child: "0px 0px 10px 0px rgb(214 214 214 / 80%)",
                "4xl": [
                    "0 35px 35px rgba(0, 0, 0, 0.25)",
                    "0 45px 65px rgba(0, 0, 0, 0.15)",
                ],
            },
        },
        fontFamily: {
            sans: ['"Montserrat"', "sans-serif"],
            circe: ['"Circe"', "Arial", "sans-serif"],
        },
    },
    plugins: [],
};
