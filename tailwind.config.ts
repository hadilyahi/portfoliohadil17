import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";


export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
         center:true,
		 padding:"15px",
		},
		screens:{
		   sm :"640px",
		   md :"768px",
		   lg :"960px",
		   xl :"1200px",
		},
		fontFamily: {
			jetBrainsMono: "var(--font-jetBrainsMono)",
		  },
    extend: {
      colors: {
       primary:'#1c1c22',
	   accent:{
		DEFAULT : '#00ff99',
		hover: '#00E187',
	   }
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
