const {faker} = require("@faker-js/faker");
module.exports.createCompany = () => {
    let newFake = {
        id: Math.floor(Math.random() * 100000000),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFake;
}
