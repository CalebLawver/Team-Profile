const Engineer = require('../lib/Engineer');

test('can get github', () => {
    const fakeGithub = 'GitHub';
    const eng = new Engineer('Caleb', 5, 'test@test.com', fakeGithub);
    expect(eng.github).toBe(fakeGithub);
});

test('testing the getRole()', () => {
    const fakeRole = 'Engineer';
    const eng = new Engineer('Caleb', 5, 'test@test.com', 'GitHub');
    expect(eng.getRole()).toBe(fakeRole);
});

test('Can get Github username from getGithub', () => {
    const fakeGithub = 'GitHub';
    const eng = new Engineer('Caleb', 5, 'test@test.com', fakeGithub);
    expect(eng.getGithub()).toBe(fakeGithub);
});

