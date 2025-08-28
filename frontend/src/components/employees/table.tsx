import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Employee from "../../models/employee";

export const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/employees/");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setLoading(false);
        const data = await response.json();
        setEmployees(data);
      } catch (e) {
        console.error("Error fetching employees:", e);
        setError("Failed to fetch employees.");
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="overflow-x-auto">
      <form action="" method="get" className="flex mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search by name"
          className="mb-4 p-2 border rounded w-full"
        />

        <button
          type="submit"
          className="mb-4 ml-2 p-4 bg-blue-500 text-white rounded  cursor-pointer hover:bg-blue-900"
        >
          <i>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 inline-block"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </i>
        </button>
      </form>
      <table className="min-w-full rounded-2xl border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              className="border-b hover:bg-gray-500 cursor-pointer"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{employee.name}</td>
              <td className="px-4 py-2">{employee.address}</td>
              <td className="px-4 py-2">{employee.phone}</td>
              <td className="px-4 py-2">
                <Link to="">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="bg-blue-500 p-3 rounded hover:bg-blue-900 m-2 cursor-pointer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </i>
                </Link>
                <Link to="">
                  <i>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="bg-yellow-500 p-3 rounded hover:bg-yellow-900 m-2 cursor-pointer"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                      <path d="M13.5 6.5l4 4" />
                    </svg>
                  </i>
                </Link>
                <i>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="bg-red-500 p-3 rounded hover:bg-red-900 m-2 cursor-pointer"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
