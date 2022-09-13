import { useState } from "react";
import styles from "../styles/employee.module.css";

export default function Employee() {
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <div className={styles.employeeWrapper}>
      <p>Name</p>
      <p>Email</p>
      <p>Role</p>
      <p>Payroll</p>
    </div>
  );
}
