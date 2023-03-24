const person = {
    firstName:'John',
    lastName: 'Jones',
    age: 25,
    hobbies: ["Gym", "Movies"],
    friends: [ 
        {
            firstName: "Tim",
            lastName: "Murphy",
            age: 32,
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 22,
            hobbies: ["Gym", "Basketball"]
        },
        {
            firstName: "Agua",
            lastName: "My",
            age: 222,
        },
        {
            firstName: "John",
            lastName: "Agua",
            age: 24,
            hobbies: ["Football", "Basketball"]
        }
    ],
//methods are functions inside an object
    greeting: () => {
        console.log(`Hello, my name is ${this.firstName}`); //el this se utiiza para dar contexto a lo que quiera señalar/mencionar
        setInterval(() => { //sin el arrow function (solo con function()), los objectos salen undefined 
            console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
        }, 1000);
    }
};

const settings = {
    example : "this is an example"
};

export const myFunc = (text) => {
    console.log(`This is a function: ${text}`);
}
export default person;
export { settings };