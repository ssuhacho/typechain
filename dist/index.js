"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Suha",
    age: 27,
    gender: "female"
};
const sayHi = (person) => {
    return (`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`);
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map