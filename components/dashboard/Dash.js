import TotalBalance from "./TotalBalance";
import WidgetContainer from "./WidgetContainer";

export default function Dash() {
    return (
        <div className="h-full max-h-full grid grid-flow-row grid-cols-4 grid-rows-3 gap-6 dense">
            <WidgetContainer
                title="Payroll to Balance"
            >
                <TotalBalance />
            </WidgetContainer>

            <WidgetContainer
                col="col-span-1"
                row="row-span-2"
                title="Balance Composition"
            >
                <>

                </>
            </WidgetContainer>

            <WidgetContainer
                col="col-span-2"
                row="row-span-1"
                title="Upcoming"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                col="col-span-2"
                row="row-span-1"
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

            <WidgetContainer
                col="col-span-2"
                row="row-span-1"
                title="Payroll Summary"
            >
                <></>
            </WidgetContainer>
        </div>
    )
}

