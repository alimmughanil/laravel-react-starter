import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/views/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")[
                    "[data-theme=light]"
                    ],
                    primary: "#EC273A",
                    "primary-focus": "#6B1019",
                    "--btn-text-case": "normal",
                },
            },
        ],
    },

    plugins: [forms, require("daisyui")],
};
