const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: '2022',
    options: ['HUD', 'Keyglass', 'Heated Seats']
};

////Square brackets are for rare cases
//console.log(myCar)["make"]);

myCar.options.forEach((option) =>{
    console.log(option);
});

const user = {};

user.name = "Fer";

//// Activity 
//    let user = {
//    firstName:'John',
//    lastName: 'Jones',
//    age: 25,
//
//    hobbies: ["Gym", "Movies"],
//    };

const user = {
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

let firstName = "Fer";
user.greeting();

//user.friends.forEach((friends.hobbies) =>{
//    console.log(user.friends);
//});

user.friends.forEach((friend) =>{  //friend is an element inside friends
    console.log(friend)
});


//user.friends[0].hobbies.forEach(hobby) => {
//    console.log(hobby);
//}

//console.log(`${user.firstName'} ${user.lastName}`);
//console.log(`${user.hobbies'}`);