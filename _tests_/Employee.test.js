
const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Employee', '123', 'abc@employee.com');

    expect(employee.name).toBe('Employee');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('abc@employee.com');
});

