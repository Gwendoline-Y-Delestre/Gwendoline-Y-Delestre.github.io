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

    var requestURL = "movies.json";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json"
    request.send();
    request.onload = function () {
        var allMovies = request.response;
        showMovies(allMovies);
    }

}

function showMovies(jsonObj) {
    var movies = jsonObj["movies"];
    var section = document.getElementById("horreur")
    section.innerHTML = ""; // Clear the content before adding new items
    console.log(movies)
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].genre == "horror") {
            var mydiv = document.createElement("div");
            var myH1 = document.createElement("h1");
            myH1.textContent = movies[i].title;
            console.log(movies[i].title)
            var myPara = document.createElement("p");
            myPara.textContent = "Year: " + movies[i].year + ", Vu : " + movies[i].seen;
            mydiv.appendChild(myH1);
            mydiv.appendChild(myPara);
            section.appendChild(mydiv);
        }
    }
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

document.getElementById("movieForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire

    var title = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    var genre = document.getElementById("genre").value;
    var seen = document.getElementById("seen").checked;

    var newMovie = {
        title: title,
        year: year,
        genre: genre,
        seen: seen
    };

    // Récupérez les données JSON existantes
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            data.movies.push(newMovie);

            // Mettez à jour le fichier JSON avec les nouvelles données
            fetch('movies.json', {
                method: 'PUT', // Assurez-vous que le fichier JSON est déjà présent dans le référentiel
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(() => {
                    console.log('Film ajouté avec succès.');
                    document.getElementById("movieForm").reset(); // Réinitialisez le formulaire
                })
                .catch(error => console.error('Erreur lors de l\'ajout du film :', error));
        });
});
