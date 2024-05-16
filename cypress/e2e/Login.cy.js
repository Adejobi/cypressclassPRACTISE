///<reference types ="cypress" />

import Login_PO from "../support/pageobjects/login_page";

//Page Object Initiazation  
const login = new Login_PO()

describe('Login functionality', () =>{
    //This initialising the data file 
    before(function () {
        cy.fixture('credential').then( (data) =>{
            globalThis.data = data;
        })
    })

    it("Verify user can login with valid credentials", () =>{ 
        login.LaunchURL()
        login.login(data.login.validdateset.username, data.login.validdateset.password)
        login.assertionForSuccessfullogin()
    })
})



