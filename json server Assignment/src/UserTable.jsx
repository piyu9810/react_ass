import React, { useEffect, useState } from "react";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Simulating API call with dummy data
    const fetchEmployees = async () => {
      const dummyData = [
        { id: 1, name: "Riya Sharma", role: "Frontend Developer", email: "riya@example.com" },
        { id: 2, name: "Amit Patel", role: "Backend Developer", email: "amit@example.com" },
        { id: 3, name: "Neha Verma", role: "UI/UX Designer", email: "neha@example.com" },
        { id: 4, name: "Rajesh Kumar", role: "Project Manager", email: "rajesh@example.com" },
      ];
      setEmployees(dummyData);
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
