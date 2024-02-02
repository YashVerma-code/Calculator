// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'sin'){
        string = eval(Math.sin(Math.PI/(180/`${string}`)));
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'tan'){
        string = eval(Math.tan(Math.PI/(180/`${string}`)));
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'cos'){
        string = eval(Math.cos(Math.PI/(180/`${string}`)));
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'root'){
        string = eval(Math.sqrt(`${string}`));
        document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})