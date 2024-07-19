/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Source: ['"Source Serif 4', "serif"],
			Bebas: ['"Bebas Neue"', "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#EE8542",
				secondary: "#4F4844",
				fill: "#F5F4F2",
				text: "#393330",
				backgrounds: "#EDEBE8",
				border: "#D2CFCC",
				icons: "#DDDAD5",
				inputBorder: "#D9D9D9",
			},
		},
	},
	plugins: [],
};
