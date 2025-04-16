const button = document.querySelector("button");

button.addEventListener("click", () => {
    fetch("https://ghibliapi.vercel.app/films/")
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur ' + response.status + ': ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('#fichesGhibli').appendChild(affichage(data));
        })
        .catch(error => {
            console.log(error);
        });
});

function affichage(datas) {
    const fiche = document.createElement('div');
    fiche.classList
    for (let i = 0; i < datas.length; i++) {
        const li = document.createElement('li');
        const text = document.createTextNode(datas[i]['title'] + ' ' + datas[i]['image']);
        li.appendChild(text);
        ul.appendChild(li);
    }
    return ul;
}


function affichage(datas) {
    const ul = document.createElement('ul');
    for (let i = 0; i < datas.length; i++) {
        const li = document.createElement('li');
        const text = document.createTextNode(datas[i]['title'] + ' ' + datas[i]['image']);
        li.appendChild(text);
        ul.appendChild(li);
    }
    return ul;
}
