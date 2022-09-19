
const sizes = {
    sm: "px-2 py-1 text-md font-light text-white tracking-wider rounded-lg bg-violet-500 cursor-pointer hover:bg-violet-400 transition-all",
    md: "px-3 py-2 text-xl font-light text-white tracking-wider rounded-lg bg-violet-500 cursor-pointer hover:bg-violet-400 transition-all",
    lg: "p-4 text-xl font-light tracking-wider text-white rounded-lg bg-violet-500 cursor-pointer hover:bg-violet-400 transition-all"
}
export default function Button(props) {

    return <button
        className={props.size ? sizes[props.size] : sizes.md}
        onClick={props.onClickHandler}
        aria-label={props.altText ?? props.label}
    >
        {props.label}
    </button>
}