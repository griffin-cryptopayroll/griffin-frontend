import TotalBalance from "./TotalBalance";
import WidgetContainer from "./WidgetContainer";

export default function Dash() {
    return (
        <div className="h-full max-h-full grid grid-flow-row grid-cols-4 grid-rows-3 gap-6">
            <WidgetContainer
                col={2}
                row={1}
                title="Total Balance"
            >
                <TotalBalance />
            </WidgetContainer>

            <WidgetContainer
                col={1}
                row={2}
                title="Balance Composition"
            >
                <>

                </>
            </WidgetContainer>

            <WidgetContainer
                col={2}
                row={1}
                title="Upcoming"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                col={4}
                row={1}
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
                col={1}
                row={1}
                title="Payroll Summary"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                col={2}
                row={1}
                title="Payroll Summary"
            >
                <></>
            </WidgetContainer>
        </div>
    )
}

