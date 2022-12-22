const {faker} = require("@faker-js/faker");
module.exports.createUser = () => {
    let newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: Math.floor(Math.random() * 100000000),
    };
    return newFake;
};

