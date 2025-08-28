import { EmployeeTable } from "../../components/employees/table";
import EmployeesOptions from "../../components/employees/options";
const EmployeesPage = () => {
  return (
    <>
      <h1 className="text-2xl">Employees</h1>
      <EmployeesOptions />
      <EmployeeTable />
    </>
  );
};

export default EmployeesPage;
