const Manager = require('../lib/Manager');

test('Can get officeNumber', () => {
    const fakeOffice = 10;
    const man = new Manager('Ryan', 1, 'test@tests.com', fakeOffice);
    expect(man.officeNumber).toBe(fakeOffice);
});

test('getOfficeNumber returns number', () => {
    const fakeOffice = 10;
    const man = new Manager('Caleb', 5, 'test@test.com', fakeOffice);
    expect(man.getOfficeNumber()).toBe(fakeOffice);
})

test('getRole() returning manager', () => {
    const fakeRole = 'Manager';
    const man = new Manager('Caleb', 5, 'test@test.com', 10);
    expect(man.getRole()).toBe(fakeRole);
});



// extend employee test parameters
// officeNumber
// getRole() * to return "Manager"