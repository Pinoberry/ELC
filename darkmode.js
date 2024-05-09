let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label__toggle')
let fecha_divisora = document.querySelector('.fecha-divisor')

toggle.addEventListener('change', (event) => {
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
} )