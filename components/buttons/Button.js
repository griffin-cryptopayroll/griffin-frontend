
const sizes = {
    sm: "px-2 py-1 text-md",
    md: "px-3 py-2 text-md",
    lg: "p-4 text-xl"
}
export default function Button({ className, label, size, onClickHandler, disabled, altText, children, inverted }) {
    className += " " + (size ? sizes[size] : sizes.md);

    if (inverted) {
        className += " font-light text-violet-500 tracking-wider rounded-lg border border-violet-500 cursor-pointer hover:bg-violet-100 transition-all select-none";
    } else {
        className += " font-light text-white tracking-wider rounded-lg bg-violet-500 cursor-pointer hover:bg-violet-400 transition-all select-none";
    }

    return <button
        className={className}
        onClick={onClickHandler}
        aria-label={altText ?? label}
        disabled={disabled}
    >
        {children ?? label}
    </button>
}