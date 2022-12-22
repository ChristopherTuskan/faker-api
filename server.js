const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const {createUser} = require("./models/createUser")
const {createCompany} = require("./models/createCompany")

// const createUser = () => {
//     let newFake = {
//         password: faker.internet.password(),
//         email: faker.internet.email(),
//         phoneNumber: faker.phone.number(),
//         lastName: faker.name.lastName(),
//         firstName: faker.name.firstName(),
//         id: Math.floor(Math.random() * 100000000),
//     };
//     return newFake;
// };

// const createCompany = () => {
//     let newFake = {
//         id: Math.floor(Math.random() * 100000000),
//         name: faker.company.name(),
//         address: {
//             street: faker.address.streetAddress(),
//             city: faker.address.city(),
//             state: faker.address.state(),
//             zipCode: faker.address.zipCode(),
//             country: faker.address.country()
//         }
//     }
//     return newFake;
// }

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (request, response) => {
    let newUser = createUser();
    console.log(newUser);
    response.json({newUser});
});

app.get("/api/companies/new", (request, response) => {
    let newCompany = createCompany();
    console.log(newCompany);
    response.json({newCompany});
});

app.get("/api/user/company", (request, response) => {
    let newUser = createUser();
    let newCompany = createCompany();
    console.log(newUser);
    console.log(newCompany);
    response.json({newUser, newCompany});
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );