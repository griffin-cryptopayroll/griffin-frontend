const checkBoxStyle = "w-6 h-6 bg-purple-100 rounded-5 accent-purple-500"

export default function Checkbox({ value, onChange }) {
    return (
        <input
            className={checkBoxStyle}
            type="checkbox"
            checked={value}
            onChange={onChange} />
    )
};