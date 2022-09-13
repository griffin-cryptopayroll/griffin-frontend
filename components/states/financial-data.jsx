import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { getPriceApi } from "../../api/price";
import { convertUsd, aggregate } from '../calculate';
export const FinancialDataContext = React.createContext({});

export const FinancialDataProvider = ({children})=>{
    const [totalBalanceByToken, setTotalBalanceByToken] = useState({
      'eth':1,
      'matic': 2,
      'usdc': 123
    });

    const [totalPayrollByToken, setTotalPayrollByToken] = useState({
      'eth':1,
      'matic': 2,
      'usdc': 123
    });
    const [totalExpectedPayByToken, setTotalExpectedPayByToken] = useState({
      'eth':1,
      'matic': 2,
      'usdc': 123
    });
    

    const [totalBalance, setTotalBalance] = useState(0);

    const [totalPayroll, setTotalPayroll] = useState(0);
    const [totalExpectedPay, setTotalExpectedPay] = useState(0);

    const loadFinancialData = async () => {
        const res = await getPriceApi();
        const priceData = res.data;
        setTotalBalanceByToken(convertUsd(totalBalanceByToken, priceData));
        setTotalBalance(aggregate(totalBalanceByToken, priceData));

        setTotalPayrollByToken(convertUsd(totalPayrollByToken, priceData));
        setTotalPayroll(aggregate(totalPayrollByToken, priceData));
        setTotalExpectedPayByToken(convertUsd(totalExpectedPayByToken, priceData));
        setTotalExpectedPay(aggregate(totalExpectedPayByToken, priceData));
    };

     useEffect(() => {
        loadFinancialData();
      }, []);
    
    return (
      <FinancialDataContext.Provider
        value={{
          totalBalanceByToken,
          totalBalance,
          totalPayrollByToken,
          totalPayroll,
          totalExpectedPayByToken,
          totalExpectedPay
        }}
      >
        {children}
      </FinancialDataContext.Provider>
    );
}