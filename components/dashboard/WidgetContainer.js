export default function WidgetContainer({ col, row, title, children }) {
    const style = `bg-white rounded-lg shadow-lg col-span-${col ?? 1} row-span-${row ?? 1} p-5 flex flex-col`
    return (
        <div className={style}>
            <div className="flex-0 font-semibold text-xl">{title}</div>
            <div className="flex-auto flex items-center justify-around">
                {children}
            </div>
        </div>
    )
}