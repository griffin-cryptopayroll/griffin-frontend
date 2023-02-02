import TotalBalance from "./Widgets/TotalBalance";
import WidgetContainer from "./WidgetContainer";
import BalanceComposition from "./Widgets/BalanceComposition";
import UpcomingPayments from "./Widgets/UpcomingPayments";
import { useAccount, useBalance } from "wagmi";

export default function Dash() {
    const { address } = useAccount()


    return (
        <div className="h-full max-h-full grid grid-flow-row grid-cols-4 grid-rows-3 gap-6 dense">
            <WidgetContainer
                title="Payroll to Balance"
            >
                <TotalBalance

                />
            </WidgetContainer>

            <WidgetContainer
                title="Balance Composition"
            >
                <BalanceComposition
                    address={address}
                />
            </WidgetContainer>

            <WidgetContainer
                col="col-span-2"
                row="row-span-1"
                title="Upcoming"
            >
                <UpcomingPayments />
            </WidgetContainer>

            <WidgetContainer
                col="col-span-2"
                row="row-span-1"
                title="Post Activities"
            >
                <></>
            </WidgetContainer>

            <WidgetContainer
                title="Latest Transactions"
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

