let result = document.querySelector('.calc__result')

document.querySelector('.calc').addEventListener('click', (event) =>{
    if(event.target.classList.contains('calc__result')) return;
    
    symb = event.target.innerText;
    switch (symb) {
        case 'C':
            result.innerText = '';
            break;
        case '=':
            result.innerText = eval(result.innerText).toFixed(2);
            break;
        default:
            if(result.innerText.search(/[^0-9%*/+-.]/mi) != -1) return;
            
            result.innerText += symb;
    }
})