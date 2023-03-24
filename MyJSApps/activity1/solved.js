let pw = document.getElementById('pw');

pw.addEventListener('input', (e) => {  //the arrow funcions run en la pagina de js entera
    console.log('e.target.value');

    if(e.target.value.lenght < 6){
        //console.log('red');
        e.target.style.color = 'red';
    }
    else if(e.target.value.lenght <= 10) {
       //console.log('orange');
       e.target.style.color = 'orange';
    }
    else{
        //console.log('green');
        e.target.style.color = 'green';
    }
  });