const Engineer = require('../lib/Engineer');

test('creates engineer profile', () => {
    const engineer = new Engineer('name');
})

test("get engineer's github", () => {
    const Engineer = new Engineer('name')

    expect(engineer.getGithub()).toEqual(expect.any(""));
});

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee' 