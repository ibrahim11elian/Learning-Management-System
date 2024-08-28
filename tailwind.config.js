import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },

            colors: {
                main: {
                    100: "#FFEEE8",
                    200: "#FFDDD1",
                    300: "#FFA386",
                    400: "#FF855E",
                    500: "#FF6636",
                    600: "#CC522B",
                    700: "#993D20",
                    800: "#662916",
                    900: "#33140B",
                },
            },
        },
    },

    plugins: [forms],
};
