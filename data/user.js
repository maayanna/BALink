/**
 * The user's documentation is a dictionary using the key as the id and the value as a dictionary with all
 * the information needed
 * I added the member password to verify the login
 * @type {{"1": {lastName: string, password: string, name: string, id: number, email: string}, "2": {lastName: string, password: string, name: string, id: number, email: string}, "3": {lastName: string, password: string, name: string, id: number, email: string}, "4": {lastName: string, password: string, name: string, id: number, email: string}}}
 */

const user = {
    1: {
        id: 1,
        name: "John",
        lastName: "Cohen",
        email: "john@gmail.com",
        password: "12345678"
    },
    2: {
        id: 2,
        name: "David",
        lastName: "Smith",
        email: "smith@gmail.com",
        password: "password"
    },
    3: {
        id: 3,
        name: "Chris",
        lastName: "Marciano",
        email: "chris@gmail.com",
        password: "helloword"
    },

    4: {
        id: 4,
        name: "Jack",
        lastName: "Levy",
        email: "jack@gmail.com",
        password: "password55"
    }
};

module.exports = user;