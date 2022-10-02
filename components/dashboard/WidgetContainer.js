export default function WidgetContainer({ col, row, title, children }) {
    const style = `bg-white rounded-lg ${row ?? "row-span-1"} ${col ?? "col-span-1"} px-3 py-2 flex flex-col select-none`
    return (
        <div className={style}>
            <div className="flex-0 font-thin text-lg">{title}</div>
            <div className="flex-auto flex items-center justify-around">
                {children}
            </div>
        </div>
    )
}