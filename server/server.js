const express = require("express");
const app = express();
const port = 8000


app.get("/api", (req,res) => {
    res.json({message: "Faker API Assignment"});
});

app.listen( port, () => console.log('Listening on port: ${port}'));



//-----------------------FAKE API-------------------------//

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFakeUser = {
        id: faker.random.numeric(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),

    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        id: faker.random.numeric(),
        name: faker.company.companyName(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),


    };
    return newFakeCompany;
};
    

//-------------------FAKE API ROUTES--------------------//

app.get("/api/users/new", (req,res) => {
    const user = createUser();
    res.json(user);
});

app.get("/api/company/new", (req,res) => {
    const company = createCompany();
    res.json(company);
});

app.get("/api/user/company", (req,res) => {
    const user = createUser();
    const company = createCompany();
    res.json(user, company);

})