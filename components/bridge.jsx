import { useState } from "react";
import styles from "../styles/bridge.module.css";

export default function Bridge() {
  const [bridgeDeposit, setBridgeDeposit] = useState(true);
  return (
    <div className={styles.bridgeWrapper}>
      <div className={styles.bridgeTab}>
        <p
          className={bridgeDeposit && styles.isActive}
          onClick={() => setBridgeDeposit(true)}
        >
          Deposit
        </p>
        <p
          className={bridgeDeposit || styles.isActive}
          onClick={() => setBridgeDeposit(false)}
        >
          Withdraw
        </p>
      </div>
      <div className={styles.wrapperContent}>
        <div className={styles.from}>
          <p>From</p>
          <div>
            <p>{bridgeDeposit ? "Ethereum Mainnet" : "Polygon Nightfall"}</p>
            <div>
              <input type="number" />
              <select>
                <option>ETH</option>
                <option>MATIC</option>
                <option>USDC</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.to}>
          <p>To</p>
          <div>
            <p>{bridgeDeposit ? "Polygon Nightfall" : "Ethereum Mainnet"}</p>
          </div>
        </div>
      </div>
      <button>{bridgeDeposit ? "Deposit" : "Withdraw"}</button>
    </div>
  );
}
