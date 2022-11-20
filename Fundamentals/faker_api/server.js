const express = require('express');
const app = express();
const PORT = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () =>{
    return {
        _id: faker.datatype.uuid(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        password:faker.internet.password(),
    }
}

const createCompany = () =>{
    return{
        _id:faker.datatype.uuid(),
        name:faker.company.name(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zip:faker.address.zipCode(),
            country:faker.address.country(),
        }
    }
}

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})

//route requires a url, and a callback function to tell the server what happens
app.get('/api/users/new', (req,res)=>{
    //console.log(req.url,req.method)
    const user = createUser()
    //send to user
    res.json(user)
})

app.get('/api/companies/new',(req,res)=>{
    const company = createCompany()
    res.json(company)
})

app.get('/api/user/company',(req,res)=>{
    const company = createCompany()
    const user = createUser()
    res.json({
            Company:company,
            User:user
        })
    
})
