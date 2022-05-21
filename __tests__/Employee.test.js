const Employee = require('../lib/Employee');

describe('Employee', () => {
    test('Creating employee object', () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe('object');
    });

    test('Can create a name', () => {
        const name = 'Caleb';
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    test('Can get ID', () => {
        const fakeId = 10101010;
        const emp = new Employee('Caleb', fakeId);
        expect(emp.id).toBe(fakeId);
    });

    test('Setting email address', () => {
        const fakeEmail = 'tests@tests.com'
        const emp = new Employee('Caleb', 5, fakeEmail);
        expect(emp.email).toBe(fakeEmail);
    });

    describe('getName', () => {
        test('Can get name from getName', () => {
            const name = 'Caleb';
            const emp = new Employee(name);
            expect(emp.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        test('Can get ID from getId', () => {
            const fakeId = 10101010;
            const emp = new Employee('Caleb', fakeId);
            expect(emp.getId()).toBe(fakeId);
        });
    });

    describe('getEmail', () => {
        test('Can getEmail', () => {
            const fakeEmail = 'tests@tests.com'
            const emp = new Employee('Caleb', 5, fakeEmail);
            expect(emp.getEmail()).toBe(fakeEmail);
        });
    });

    describe('getsRole', () => {
        test('getting the role', () => {
            const fakeRole = 'Employee'
            const emp = new Employee('Caleb', 5, 'test@test.com');
            expect(emp.getRole()).toBe(fakeRole);
        });
    });
})