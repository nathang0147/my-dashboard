import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/*.{js,ts,jsx,tsx}",
        "./src/app/**/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx}",
        "./src/styles/**/*.{css,scss}",
    ],
    theme: {
        colors: {
            ...colors,
        },
        extend: {
            minHeight: {
                "screen-75": "75vh",
            },
            fontSize: {
                "55xl": "55rem",
            },
            opacity: {
                80: ".8",
            },
            zIndex: {
                "2": "2",
                "3": "3",
            },
            inset: {
                "-100": "-100%",
                "-225px": "-225px",
                "-160px": "-160px",
                "-150px": "-150px",
                "-94px": "-94px",
                "-50px": "-50px",
                "-29px": "-29px",
                "-20px": "-20px",
                "25px": "25px",
                "40px": "40px",
                "95px": "95px",
                "145px": "145px",
                "195px": "195px",
                "210px": "210px",
                "260px": "260px",
            },
            height: {
                "95px": "95px",
                "70px": "70px",
                "350px": "350px",
                "500px": "500px",
                "600px": "600px",
            },
            maxHeight: {
                "860px": "860px",
            },
            maxWidth: {
                "100px": "100px",
                "120px": "120px",
                "150px": "150px",
                "180px": "180px",
                "200px": "200px",
                "210px": "210px",
                "580px": "580px",
            },
            minWidth: {
                "140px": "140px",
                48: "12rem",
            },
            backgroundSize: {
                full: "100%",
            },
        },
    },
    plugins: [
        forms, // ✅ Fixed @tailwindcss/forms import
        plugin(function ({ addComponents, theme }) {
            const screens = theme("screens") ?? {}; // ✅ Ensures screens is always defined
            addComponents({
                ".container": { width: "100%" },
                [`@media (min-width: ${screens.sm ?? "640px"})`]: {
                    ".container": { "max-width": "640px" },
                },
                [`@media (min-width: ${screens.md ?? "768px"})`]: {
                    ".container": { "max-width": "768px" },
                },
                [`@media (min-width: ${screens.lg ?? "1024px"})`]: {
                    ".container": { "max-width": "1024px" },
                },
                [`@media (min-width: ${screens.xl ?? "1280px"})`]: {
                    ".container": { "max-width": "1280px" },
                },
                [`@media (min-width: ${screens["2xl"] ?? "1536px"})`]: {
                    ".container": { "max-width": "1536px" },
                },
            });
        }),
    ],
};

export default config;
