const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Ryan', 555, 'ryanO@gmail.com');

    expect(employee.name).toBe('Ryan');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('ryanO@gmail.com')
});