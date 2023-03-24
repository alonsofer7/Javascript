
const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 2022,
    options: ['HUD', 'Keyless', 'Heated seats']
};

// // square brackets are for rare cases like strange property name, not used often
// console.log(myCar["make"]);

// // dot notation is a lot more common
// console.log(myCar.make);

myCar.options.forEach((option) => {
    console.log(option);
});

// const user = {};
// user.name = "Conor";

const user = {
    firstName: "John",
    lastName: "Jones",
    age: 25,
    hobbies: ['Gym', 'Movies'],
    friends: [
        {
            firstName: "Tim",
            lastName: "Murphy",
            age: 35
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 27,
            hobbies: ['Swimming', 'Gym', 'Football']
        }
    ],
};

user.friends.hobbies.forEach((hobby) => {
    console.log(hobby)
});


console.log(`${user.firstName} ${user.lastName}`);
console.log(`${user.hobbies}`);

// Another way of adding something to the user object
// user.friend = {
//     firstName: "Tim",
//     lastName: "Murphy",
//     age: 35
// }




// console.log(friendsHobbies);

