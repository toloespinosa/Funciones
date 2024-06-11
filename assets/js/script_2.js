
const divro = document.getElementById('divro');
const divaz = document.getElementById('divaz');
const divve = document.getElementById('divve');
const divam = document.getElementById('divam');


function pintar_negro(evento) {
    evento.target.style.backgroundColor = 'black';
}


divro.addEventListener('click', pintar_negro);
divaz.addEventListener('click', pintar_negro);
divve.addEventListener('click', pintar_negro);
divam.addEventListener('click', pintar_negro);

document.addEventListener('keydown', function(event) {
    const key = document.getElementById('key');
    if (event.key === 'a' || event.key === 'A') {
        key.style.backgroundColor = 'pink';
    } else if (event.key === 's' || event.key === 'S') {
        key.style.backgroundColor = 'orange';
    } else if (event.key === 'd' || event.key === 'D') {
        key.style.backgroundColor = 'lightblue';
    }

    let newDiv;
    if (event.key === 'q' || event.key === 'Q') {
        newDiv = document.createElement('div');
        newDiv.style.height = '200px';
        newDiv.style.width = '200px';
        newDiv.style.backgroundColor = 'purple';
    } else if (event.key === 'w' || event.key === 'W') {
        newDiv = document.createElement('div');
        newDiv.style.height = '200px';
        newDiv.style.width = '200px';
        newDiv.style.backgroundColor = 'gray';
    } else if (event.key === 'e' || event.key === 'E') {
        newDiv = document.createElement('div');
        newDiv.style.height = '200px';
        newDiv.style.width = '200px';
        newDiv.style.backgroundColor = 'brown';
    }
    
    if (newDiv) {
        document.body.appendChild(newDiv);
    }
});
