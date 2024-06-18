/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'amber-brown': '#703d28',
        'paper': '#fff8ed',
        "Core": '#FF57C3',
        "Regular_Activity": '#FF1993',
        "Mapping": '#FF7AAA',
        "Positive_Emotion": '#FFA057',
        "Emotional_Regulation": '#FF7A33',
        "Negative_Emotion": '#FFBD80',
        "Motivation": '#FF6666',
        "Zoning_In": '#FF0000',
        "Achievement": '#CC0000',
        "Communication": '#6699FF',
        "Relationships": '#477BFF',
        "Social_Behaviour": '#3369FF',
        "Leadership_and_Teamwork": '#1F57FF',
        "Learning_and_Knowledge": '#00eed1',
        "Creativity_and_Exploration": '#00d2b8',
        "Setbacks": '#00E02D',
        "Resilience": '#00d221',
        "Growth": '#2EB800',
        "Adaptation": '#248F00',
        "Desires_and_Impulses": '#C357FF',
        "Addiction_and_Control": '#9319FF',
        "Health": '#FF30FF'
      },
      fontFamily:{
        roboto: ['Roboto'],
        noto_serif: ['Noto Serif TC']
      }
    }
  },
  plugins: [],
};
