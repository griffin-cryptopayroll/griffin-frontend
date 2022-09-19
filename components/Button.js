
const sizes = {
    sm: "p-1 text-md text-white rounded-lg bg-violet-500 hover:bg-violet-400 transition-all",
    md: "p-2 text-xl text-white rounded-lg bg-violet-500 hover:bg-violet-400 transition-all",
    lg: "p-4 text-2xl text-white rounded-lg bg-violet-500 hover:bg-violet-400 transition-all"
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