
const sizes = {
    sm: "px-2 py-1 text-md font-light text-white tracking-wider rounded-lg bg-violet-500 cursor-pointer hover:bg-violet-400 transition-all select-none",
    md: "px-3 py-2 text-md font-light text-white tracking-wider rounded-lg bg-violet-500 cursor-pointer hover:bg-violet-400 transition-all select-none",
    lg: "p-4 text-xl font-light tracking-wider text-white rounded-lg bg-violet-500 cursor-pointer hover:bg-violet-400 transition-all select-none"
}
export default function Button({ label, size, onClickHandler, altText, children }) {

    return <button
        className={size ? sizes[size] : sizes.md}
        onClick={onClickHandler}
        aria-label={altText ?? label}
    >
        {children ?? label}
    </button>
}