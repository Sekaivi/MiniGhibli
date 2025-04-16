const fichesGhibli = document.querySelector('#fichesGhibli');
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalText");
const closeModal = document.getElementById("close-modal");
const infoSide = document.getElementById('infoSide');
const infosMain = document.getElementById('infosMain');


fetch("https://ghibliapi.vercel.app/films/")
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur ' + response.status + ': ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        data.forEach(movie => {
            fichesGhibli.appendChild(affichage(movie));
        });
    })
    .catch(error => console.error(error));


function affichage(data) {
    // conteneur carte
    const fiche = document.createElement('div');
    fiche.classList.add('carteGhibli');

    // pour la carte au survol
    const ficheHover = document.createElement('div');
    ficheHover.classList.add('hoverInfos');
    fiche.appendChild(ficheHover);

    const bannerFilm = document.createElement('img');
    bannerFilm.src = data['movie_banner'];
    bannerFilm.alt = 'Bannière ' + data['title'];
    bannerFilm.classList.add('bannerFilm');
    ficheHover.appendChild(bannerFilm);
    // Titre Jap
    const titreJap = document.createElement('p');
    titreJap.classList.add('titreJap');
    titreJap.innerHTML = 'Original title: ' + data['original_title'];
    ficheHover.appendChild(titreJap);
    // Director
    const director = document.createElement('p');
    director.classList.add('director');
    director.innerHTML = 'Director: ' + data['director'];
    ficheHover.appendChild(director);
    // Description
    const description = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = 'Description: ' + data['description'].slice(0, 100) + '[...]';
    ficheHover.appendChild(description);

    // image
    const imageFilm = document.createElement('img');
    imageFilm.src = data['image'];
    imageFilm.alt = 'Visuel de ' + data['title'];
    imageFilm.classList.add('imageFilm');
    fiche.appendChild(imageFilm);
    // conteneur des infos
    const infosFilm = document.createElement('div');
    infosFilm.classList.add('infoFilm');
    fiche.appendChild(infosFilm);
    // Titre
    const titre = document.createElement('p');
    titre.classList.add('titre');
    titre.innerHTML = data['title'];
    infosFilm.appendChild(titre);
    // année
    const releaseYear = document.createElement('p');
    releaseYear.classList.add('date');
    releaseYear.innerHTML = 'Released in: ' + data['release_date'];
    infosFilm.appendChild(releaseYear);
    // Durée
    const runningTime = document.createElement('p');
    runningTime.classList.add('duree');
    runningTime.innerHTML = 'Running time: ' + data['running_time'];
    infosFilm.appendChild(runningTime);
    // Score
    const score = document.createElement('p');
    score.classList.add('rating');
    score.innerHTML = 'Rating score: ' + data['rt_score'];
    infosFilm.appendChild(score);

    // quand on clique
    fiche.addEventListener("click", () => {
        modal.style.display = 'flex';
        infoSide.innerHTML = '';
        infosMain.innerHTML = '';
        // banniere
        const bannerFilm = document.createElement('img');
        bannerFilm.src = data['movie_banner'];
        bannerFilm.alt = 'Bannière ' + data['title'];
        bannerFilm.classList.add('bannerFilm');
        infosMain.appendChild(bannerFilm);
        // image
        const imageFilm = document.createElement('img');
        imageFilm.src = data['image'];
        imageFilm.alt = 'Visuel de ' + data['title'];
        imageFilm.classList.add('imageFilm');
        infoSide.appendChild(imageFilm);
        // titre
        const titre = document.createElement('p');
        titre.classList.add('titre');
        titre.innerHTML = data['title'];
        infoSide.appendChild(titre);
        // titre japonais
        const titreJap = document.createElement('p');
        titreJap.classList.add('titreJap');
        titreJap.innerHTML = 'Original title: ' + data['original_title'];
        infoSide.appendChild(titreJap);
        // titre romaji
        const titreRom = document.createElement('p');
        titreRom.classList.add('titreRom');
        titreRom.innerHTML = 'Romanized: ' + data['original_title_romanised'];
        infoSide.appendChild(titreRom);
        // Director
        const director = document.createElement('p');
        director.classList.add('director');
        director.innerHTML = 'Director: ' + data['director'];
        infoSide.appendChild(director);
        // Producer
        const producer = document.createElement('p');
        producer.classList.add('producer');
        producer.innerHTML = 'Producer: ' + data['producer'];
        infoSide.appendChild(producer);
        // Release Date
        const releaseYear = document.createElement('p');
        releaseYear.classList.add('date');
        releaseYear.innerHTML = 'Released in: ' + data['release_date'];
        infoSide.appendChild(releaseYear);
        // Running time
        const runningTime = document.createElement('p');
        runningTime.classList.add('duree');
        runningTime.innerHTML = 'Running time: ' + data['running_time'];
        infoSide.appendChild(runningTime);
        // Rating Score
        const score = document.createElement('p');
        score.classList.add('rating');
        score.innerHTML = 'Rating score: ' + data['rt_score'];
        infoSide.appendChild(score);
        // description
        const description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = 'Description: ' + data['description'];
        infosMain.appendChild(description);
    });

    // Quand on hover
    fiche.addEventListener('mouseenter', () => {
        ficheHover.style.display = 'block';
    });

    fiche.addEventListener('mouseleave', () => {
        ficheHover.style.display = 'none';
    });

    return fiche;
}


closeModal.addEventListener("click", () => {
    modal.style.display = 'none';
})