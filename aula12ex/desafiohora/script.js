function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    // var hora = data.getHours(); // Para teste rápido, você pode usar hora fixa
    var hora = 19;
    
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`;

    if (hora >= 0 && hora < 12) {
        img.src = "manha.png"; 
        document.body.style.background = '#eaea86';
    } 
    else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'; 
        document.body.style.background = '#eab186';
    } 
    else {
        img.src = 'noite.png'; 
        document.body.style.background = '#001971';
    }
}
