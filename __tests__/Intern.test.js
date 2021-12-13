const Intern = require('../lib/Intern');

test('Testing Engineer Object', () => {
    const intern = new Intern('Name1', "1", "name@gmail.com", "School");

    expect(intern.name).toBe('Name1');
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("name@gmail.com")
    expect(intern.school).toBe("School")
})

test('Testing out School Function', () => {
    const intern = new Intern('Name1', "1", "name@gmail.com", "School");

    expect(intern.getSchool()).toBe('School');
})
