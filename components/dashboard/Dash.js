import TotalBalance from "./TotalBalance";
import WidgetContainer from "./WidgetContainer";

export default function Dash() {
    return (
        <div className="h-full grid grid-flow-row grid-cols-4 grid-rows-4 gap-8">
            <WidgetContainer
                title="Total Balance"
            >
                <TotalBalance />
            </WidgetContainer>

            <WidgetContainer
                col={1}
                row={2}
                title="Balance Composition"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                title="Upcoming"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                title="Payroll Activities"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                title="Latest Transactions"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                title="Payroll Summary"
            >
                <></>
            </WidgetContainer>
        </div>
    )
}

