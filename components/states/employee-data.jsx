import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getEmployeeApi } from "../../api/employee";
import _ from "lodash";

export const EmployeeDataContext = React.createContext({});

export const mapEmployeeData = (employee) => {
  const i = _.random(1, 2);
  const avatarUrl = `/pf${i}.png`;

  return { ...employee, avatarUrl };
};

export const EmployeeDataProvider = ({ children }) => {
  const [employeeReList, setEmployeeReList] = useState([]);
  const [employeeNReList, setEmployeeNReList] = useState([]);
  const [totalEmplyeeList, setTotalEmployeeList] = useState([]);
  const [totalEmployee, setTotalEmployee] = useState();
  const router = useRouter();
  const { employerId } = router.query;
  const getEmployee = async (employerId) => {
    console.log(employerId);
    const res = await getEmployeeApi(employerId);
    setEmployeeNReList(res.data.repeat_false.map(mapEmployeeData));
    setEmployeeReList((res.data.repeat_true || []).map(mapEmployeeData));
    setTotalEmployee(res.data.total_length);
    setTotalEmployeeList(
      (res.data.repeat_true || []).concat(res.data.repeat_false)
    );
    console.log(res);
  };

  useEffect(() => {
    getEmployee(employerId);
  }, []);

  return (
    <EmployeeDataContext.Provider
      value={{
        employeeReList,
        setEmployeeReList,
        employeeNReList,
        setEmployeeNReList,
      }}
    >
      {children}
    </EmployeeDataContext.Provider>
  );
};
