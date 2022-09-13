import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import PieCard from "./pieCard.jsx";
import TotalBalancePie from "./totalBalancePie";
import styles from "../styles/dashboard.module.css";
import _ from "lodash";
import { asDataPairs } from "./calculate";

const TotalBalance = ({ statistics, byToken }) => (
  <PieCard
    pie={<TotalBalancePie data={asDataPairs(byToken)} />}
    title="total"
    statistics={statistics}
  />
);

export default TotalBalance;
