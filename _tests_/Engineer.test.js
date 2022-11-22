const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('lax', '321', 'lax@engineer.com', 'github');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});
