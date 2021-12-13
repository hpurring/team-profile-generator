const Employee = require('../lib/Employee');

test('Testing Employee Object', () => {
    const employee = new Employee('Name1', "1", "name@gmail.com");

    expect(employee.name).toBe('Name1');
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("name@gmail.com")
})

test('Testing out getName Function', () => {
    const employee = new Employee('Name1', "1", "name@gmail.com");

    expect(employee.getName()).toBe('Name1');
})

test('Testing out getID Function', () => {
    const employee = new Employee('Name1', "1", "name@gmail.com");

    expect(employee.getId()).toBe("1");
})

test('Testing out getEmail Function', () => {
    const employee = new Employee('Name1', "1", "name@gmail.com");

    expect(employee.getEmail()).toBe("name@gmail.com");
})

test('Testing out getRole Function', () => {
    const employee = new Employee('Name1', "1", "name@gmail.com");

    expect(employee.getRole()).toBe('Employee');
})