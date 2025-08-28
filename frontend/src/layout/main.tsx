import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import EmployeesPage from "../pages/employees";
import EmployeesCreate from "../pages/employees/create";
const Main = () => {
  return (
    <>
      <main className="container mx-auto p-4 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employees/create" element={<EmployeesCreate />} />
          <Route path="/cv" element={<Home />} />
          <Route path="/habilities" element={<Home />} />
          <Route path="/projects" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
