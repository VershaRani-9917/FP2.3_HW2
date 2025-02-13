const employees = [
  { id: 1, name: "Alice", experience: "2 years" },
  { id: 2, name: "Bob", experience: "9 years" },
  { id: 3, name: "Charlie", experience: "4 years" },
  { id: 4, name: "David", experience: "19 years" },
];

const employeeListContainer = document.querySelector("#employeeList");
const experienceFilter = document.querySelector("#experienceFilter");

function renderEmployees(filterByExperience) {
  const filteredEmployees = filterByExperience
    ? employees.filter((employee) => parseInt(employee.experience) > 5)
    : employees;

  const employeeListHTML = filteredEmployees
    .map(
      (employee) => `
        <li>
            <strong>ID: </strong>${employee.id}<br>
            <strong>Name: </strong>${employee.name}<br>
            <strong>Experience: </strong>${employee.experience}<br>
        </li>
        <hr>`
    )
    .join("");

  employeeListContainer.innerHTML = employeeListHTML;
}

// Initial render
renderEmployees(false);

// Add event listener for checkbox
experienceFilter.addEventListener("change", function () {
  renderEmployees(experienceFilter.checked);
});
