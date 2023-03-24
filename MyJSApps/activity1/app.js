function check() { 
    //pw= password-input

    const less6 = document.getElementById('password-input');
    const less10 = document.getElementById('password-input');
   // const long10 = document.getElementById('password-input');
    const color1 = "#e32636";
    const color2 = "#ffbf00";
    const color3 = "#8db600"


if(less6.value.length < 6)
    {
        less6.style.Color = color1;
        message.innerHTML = "password length not ok"
        

    }else if(less6.value.length =  less10.value.lenght)
    {
        less6.style.Color = color2;
        message.innerHTML = " you have to enter at least 6 digit!"
        

    }else {

       less6.style.Color = color3;
        message.innerHTML = "you entered more than 10 digits"
    }

}