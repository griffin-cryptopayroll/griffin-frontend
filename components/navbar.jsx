import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/UIHUT.png";
import styles from "../styles/navbar.module.css";
import L1Button from "./l1Button";
import L2Button from "./l2Button";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div>
        <Link href="/">
          <a className={styles.logobox}>
            <Image src={logo} />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <p>L1</p>
          <L1Button />
        </li>
        <li>
          <p>L2</p>
          <L2Button />
        </li>
      </ul>
    </div>
  );
}
