const Manager = require('../lib/Manager');

test('Testing Manager Object', () => {
    const manager = new Manager('Name1', "1", "name@gmail.com", "Office");

    expect(manager.name).toBe('Name1');
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("name@gmail.com")
    expect(manager.office).toBe("Office")
})

test('Testing out Office Function', () => {
    const manager = new Manager('Name1', "1", "name@gmail.com", "Office");

    expect(manager.getOffice()).toBe('Office');
})
