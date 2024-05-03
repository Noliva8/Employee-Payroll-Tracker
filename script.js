// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

const collectEmployees = function() {
  const employeesArray = [];
  
  // 
  let addEmployee = true;

 
  while (addEmployee) {
  
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");
    let salaryInput = prompt("Enter salary:");

//  convert string to number
    let salary = !isNaN(parseFloat(salaryInput)) ? parseFloat(salaryInput) : 0;


    employeesArray.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

  
    let userInput = confirm ("Do you want to add another employee? (yes/no)");
    
    if (userInput === false){
      addEmployee = false
    }
  }
  return employeesArray;
}




// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  if (employeesArray.length === 0) {
    console.log("No employees found.");
    return; 
  }

let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

 let averageSalary = totalSalary / employeesArray.length;



console.log(`Average Salary: $${averageSalary}`);
  console.log(`Number of Employees: ${employeesArray.length}`);

}





// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
   
   const randomIndex = Math.floor(Math.random() * employeesArray.length);
   const randomEmployee = employeesArray[randomIndex];
    const fullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`;
    console.log(`Randomly Selected Employee: ${fullName}`);
   
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
