import Employee from "../../models/employee";
import { useState, useEffect } from "react";

const EmployeeCard = ({ employee }: { employee: Employee }) => {
  return (
    <>
      <article>
        <h2>{employee.name}</h2>
      </article>
    </>
  );
};

export default EmployeeCard;
