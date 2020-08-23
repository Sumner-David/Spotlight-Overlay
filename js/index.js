



let lightMove = document.addEventListener('mousemove', function(event) {
    let X = event.pageX;
    let Y = event.pageY;

    document.querySelector('.light').style.background = 'radial-gradient(circle at ' + X + 'px ' + Y + 'px, transparent, rgba(0,0,0,0.98) 25%)';



    console.log('radial-gradient(circle at ' + X + 'px ' + Y + 'px, transparent, #000 30%)')
})

lightMove();

