const Engineer = require('../lib/Engineer');

test('Testing Engineer Object', () => {
    const engineer = new Engineer('Name1', "1", "name@gmail.com", "Github");

    expect(engineer.name).toBe('Name1');
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("name@gmail.com")
    expect(engineer.github).toBe("Github")
})

test('Testing out getGithub Function', () => {
    const engineer = new Engineer('Name1', "1", "name@gmail.com", "Github");

    expect(engineer.getGithub()).toBe('Github');
})
