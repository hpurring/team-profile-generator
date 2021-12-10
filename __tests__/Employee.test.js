const Employee = require('../lib/Employee.js');

test('creates employee profile', () => {
    const employee = new Employee('name')

    expect(employee.name)toBe('name');
    expect(employee.id)toEqual(expect.any(Number));
    expect(employee.email)toEqual(expect.any(Email));

})


// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

