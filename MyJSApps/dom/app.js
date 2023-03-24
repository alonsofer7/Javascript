//let p = document.createElement('p');

//p.innerHTML = "This is an example"

//let h1 = document.getElementById("welcome");

//h1.appendChild(p); 
//esto esta mal porque meteria el <p> dentro del h1

//h1.parentElement.appendChild(p);

let addressField = document.getElementsByName('address');
addressField[0].placeholder = "name";
let h1 = document.getElementById("welcome");
let myBtn = document.getElementById('my_btn');

function addPTag() {
    
    let p = document.createElement('p');
    //p.innerHTML = "This is an example"
    p.innerHTML = addressField[0].value;
    addressField[0].value = "";
    h1.parentElement.appendChild(p);

    
//h1.appendChild(p); 
//esto esta mal porque meteria el <p> dentro del h1
    h1.parentElement.appendChild(p);
}

myBtn.addEventListener('click', addPTag);


