/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    "relative","mx-auto","mt-20","shadow-2xl","bg-white","rounded-b-lg","overflow-hidden",
    "w-[90%]","max-w-[500px]","flex","flex-col","p-5","gap-7","-mt-px",
    "grid","grid-cols-7","text-center","text-xs","font-bold","text-gray-700","pb-2",
    "p-2","text-sm","rounded-sm","cursor-pointer","transition-colors","duration-200",
    "bg-[#1a9bd7]","text-white","font-extrabold","hover:bg-blue-50","text-gray-400","text-[#1a9bd7]",
    "absolute","bottom-0","left-0","w-full","h-[150px]","h-[160px]","z-10","z-0",
    "h-[320px]","object-cover"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        primaryHover: "#3b82f6",
        primarySoft: "rgba(37, 99, 235, 0.15)",
        textPrimary: "#1f2933",
        textSecondary: "#6b7280",
      },
    },
  },
  plugins: [],
}
