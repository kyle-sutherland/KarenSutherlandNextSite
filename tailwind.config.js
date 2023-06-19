/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                'charcoal': '#3E424D',
                'slate': '#6B7288',
                'cool-gray': '#98A3C4',
                'periwinkle': '#c5d3ff',
                'ghost-white': '#F1F4FF',
                'purple-gray': '#383742',
                'pale-lilac': '#A4A1C3',
                'painter-gray': '#79778F',
                'blue-green': '#024059',
                'thistle-blossom': '#8AB0BF',
                'bosporus': '#035E73',
                'calypso-blue': '#307B8C',
                'bleached-silk': '#F2F2F2',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
