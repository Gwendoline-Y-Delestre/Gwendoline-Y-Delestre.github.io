function accueil() {
    document.getElementById("accueil").style.display = 'block'
    document.getElementById("horreur").style.display = 'none'
    document.getElementById("nav").style.backgroundColor = '#707070'
    document.getElementById("nav").style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(23, 47, 61, 1) 5px 10px 15px'
    const lis = document.querySelectorAll('li');
    lis.forEach((li) => {
        li.style.setProperty('--li-background-color', 'rgb(225, 225, 225)');
    });
}

function horreur() {
    document.getElementById("horreur").style.display = 'block'
    document.getElementById("accueil").style.display = 'none'
    document.getElementById("nav").style.backgroundColor = '#920000'
    document.getElementById("nav").style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(198, 47, 61, 1) 5px 10px 15px'

    const lis = document.querySelectorAll('li');
    lis.forEach((li) => {
        li.style.setProperty('--li-background-color', '#320000');
    });
      document.addEventListener("DOMContentLoaded", function () {
        fetch("json/horror.json")
        console.log("ok")
            .then(response => response.json())
            .then(data => {
                const watchedList = document.getElementById("watched-list");
                const toWatchList = document.getElementById("to-watch-list");

                data.watched.forEach(movie => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${movie.title} (${movie.year}) (Vu)`;
                    watchedList.appendChild(listItem);
                });

                data.toWatch.forEach(movie => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${movie.title} (${movie.year}) (À Voir)`;
                    toWatchList.appendChild(listItem);
                });
            })
            .catch(error => console.error("Erreur de chargement des données : " + error));
    });
}

function cartoon() {
    alert("cartoon")
}

function drame() {
    alert("drame")
}

function comedie() {
    alert("comedie")
}

function thriller() {
    alert("thriller")
}
