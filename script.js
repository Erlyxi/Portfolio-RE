function showSection(id){
    document.getElementById('dessin').style.display = 'none';
    document.getElementById('jeux').style.display = 'none';
    document.getElementById('sport').style.display = 'none';

    document.getElementById(id).style.display = 'block';
}

function openModal(src){
    document.getElementById('modal').style.display='flex';
    document.getElementById('modal-img').src = src;
    document.getElementById('modal-title').innerText='';
    document.getElementById('modal-text').innerText='';
}

function openGame(title,text){
    document.getElementById('modal').style.display='flex';
    document.getElementById('modal-img').src = '';
    document.getElementById('modal-title').innerText=title;
    document.getElementById('modal-text').innerText=text;
}