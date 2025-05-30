import React, { Component } from "react";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    
    setTimeout(() => {
      const dummyData = [
        { id: 1, name: "Amit Patel", age: 35, designation: "Software Engineer" },
        { id: 2, name: "Priya Sharma", age: 29, designation: "Product Manager" },
        { id: 3, name: "Rahul Mehra", age: 40, designation: "Tech Lead" },
        { id: 4, name: "Sneha Joshi", age: 26, designation: "UI/UX Designer" },
        { id: 5, name: "Vikram Rao", age: 31, designation: "Backend Developer" },
      ];
      this.setState({ employees: dummyData });
    }, 1000); 
  }

  render() {
    return (
      <div>
        <h2>Employee List</h2>
        <ul>
          {this.state.employees.map((employee) => (
            <li key={employee.id}>
              <strong>Name:</strong> {employee.name}, <strong>Age:</strong> {employee.age}, <strong>Designation:</strong> {employee.designation}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
