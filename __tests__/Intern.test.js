const Intern = require('../lib/Intern');

test('can get school', () => {
    const fakeSchool = 'USU';
    const intern = new Intern('Caleb', 5, 'test@test.com', fakeSchool);
    expect(intern.school).toBe(fakeSchool);
});

test('testing the getRole()', () => {
    const fakeRole = 'Intern';
    const intern = new Intern('Caleb', 5, 'test@test.com', 'USU');
    expect(intern.getRole()).toBe(fakeRole);
});

test('Can get Github username from getSchool', () => {
    const fakeSchool = 'USU';
    const intern = new Intern('Caleb', 5, 'test@test.com', fakeSchool);
    expect(intern.getSchool()).toBe(fakeSchool);
});
