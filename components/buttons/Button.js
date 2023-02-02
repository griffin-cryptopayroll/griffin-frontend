
const sizes = {
    sm: "px-2 py-1 text-md ",
    md: "px-3 py-2 text-md ",
    lg: "p-4 text-xl "
}

const colors = {
    solidPurple: 'text-white bg-violet-500 hover:bg-violet-400 ',
    outlinePurple: 'text-violet border-2 border-violet-400 hover:bg-violet-100 hover:text-white',
}
const base = 'font-light tracking-wider rounded-lg cursor-pointer transition-all select-none disabled:opacity-75'


export default function Button({ label, size, color, onClickHandler, disabled, altText, children }) {

    return <button
        className={(size ? sizes[size] : sizes.md) + (color ? colors[color] : colors.solidPurple) + base}
        onClick={onClickHandler}
        aria-label={altText ?? label}
        disabled={disabled}
    >
        {children ?? label}
    </button>
}