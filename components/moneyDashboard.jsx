import { useState } from "react";
import styles from "../styles/dashboard.module.css";
import BalanceAnalytics from "./balanceAnalytics";
import CommitPayroll from "./commitpayroll";
import ExpectedPay from "./expectedpayroll";
import RecentEmployee from "./recentEmployee";
import RecentPayrollActivity from "./recentpayrollactivity";
import RigisterPayroll from "./registerpayroll";
import TotalBalance from "./totalbalance";
import TotalPayroll from "./totalpayroll";
import {
  EmployeeDataProvider,
  EmployeeDataContext,
} from "./states/employee-data";
import { FinancialDataContext, FinancialDataProvider } from "./states/financial-data";

export default function MoneyDashboard() {
  const nightfall_balance = 32;
  const layer1_balance = 21;
  const [nightfall, setNightfall] = useState(true);
  const L1connect = true;
  return (
    <EmployeeDataProvider>       
       <FinancialDataProvider>
       <FinancialDataContext.Consumer>
       {(context) => {
        return (
            <div className={styles.dashboardBox}>
                <div className={styles.dashboardFirst}>
                  <TotalBalance byToken={context.totalBalanceByToken} statistics={context.totalBalance} />
                  <ExpectedPay byToken={context.totalExpectedPayByToken} statistics={context.totalExpectedPay} />
                  <div className={styles.btnBox}>
                    <RigisterPayroll />
                    <CommitPayroll />
                  </div>
                </div>
                <div className={styles.dashboardSecond}>
                  <TotalPayroll byToken={context.totalPayrollByToken} statistics={context.totalPayroll} />
                  <EmployeeDataContext.Consumer>
                    {(context) => {
                      return <RecentEmployee employees={context.employeeNReList} />;
                    }}
                  </EmployeeDataContext.Consumer>
                </div>
                <div className={styles.dashboardThird}>
                  <BalanceAnalytics />
                  <RecentPayrollActivity />
                </div>
            </div>
          )              
          }}
      
      </FinancialDataContext.Consumer>
      </FinancialDataProvider>
    </EmployeeDataProvider>
  );
}
