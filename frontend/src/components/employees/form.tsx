import Employee from "../../models/employee";
import { Link } from "react-router-dom";

const EmployeeCreateForm = () => {
  const url = "http://localhost:8000/api/employees/";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as unknown as Employee;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form action="" method="post" className="flex flex-col gap-4">
        <h1 className="text-2xl">Create Employee</h1>

        <fieldset className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border p-2 rounded"
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            Address
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border p-2 rounded"
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            Email
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border p-2 rounded"
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="name" className="mb-2">
            Phone
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border p-2 rounded"
            max={20}
          />
        </fieldset>

        <div className="flex gap-4 my-4 justify-around">
          <button type="submit">
            <i>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="bg-blue-500 p-2 rounded hover:bg-blue-900 m-2 cursor-pointer w-13 h-13"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M14 4l0 4l-6 0l0 -4" />
              </svg>
            </i>
          </button>
          <Link to="/employees/">
            <i>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="bg-gray-500 p-2 rounded hover:bg-gray-900 m-2 cursor-pointer w-13 h-13"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
              </svg>
            </i>
          </Link>
        </div>
      </form>
    </>
  );
};

export default EmployeeCreateForm;
