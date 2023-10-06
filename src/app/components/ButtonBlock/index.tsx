import clsx from "clsx";

export type ButtonBlockType = {
    text: string;
    color: string;
    bgColor: string;
}

const ButtonBlock = ({ text, color, bgColor }: ButtonBlockType) => (
    <button
        className="px-6 py-2 font-medium tracking-wide text-white capitalize rounded-full focus:outline-none focus:ring focus:ring-opacity-90 transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        // Using styles to define arbitrary values as suggested in the documentation → https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support
        style={{ color: color, backgroundColor: bgColor }}
    >
        {text}
    </button>
);

export default ButtonBlock