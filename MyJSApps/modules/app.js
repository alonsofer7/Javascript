import user, { myFunc, settings as config} from './user.js';
const btn = document.getElementById("loader");

console.log(user.firstName);
console.log(config.example);

myFunc("Hi");

btn.addEventListener('click', () => {
   // let myDynamicFunction = import('./dynamic.js') 

    import('./dynamic.js').then((Module) => {
        //console.log(Module);
        Module.myDynamicFunction();
   })
});

