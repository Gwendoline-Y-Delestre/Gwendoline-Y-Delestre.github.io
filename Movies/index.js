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

    // var requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    // var request = new XMLHttpRequest();
    // request.open("GET", requestURL);
    // request.responseType = "json";
    // request.send();
    // request.onload = function () {
    //     var superHeroes = request.response;
    //     populateHeader(superHeroes);
    //     showHeroes(superHeroes);
    // };

    var requestURL = "json/horror.json";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json"
    request.send();
    ReadableStreamBYOBRequest.onload = function () {
        var allMovies = request.response;
        showMovies(allMovies);
    }

}
var section = document.getElementById("horreur");
function showMovies(jsonObj) {
    var movies = jsonObj["horrorMovies"];
    for (var i = 0; i < movies.length; i++) {
        var mydiv = document.createElement("div");
        var myH1 = document.createElement("h1")
        myH1.textContent = movies[i].title;


        var myPara = document.createElement("p");
        myPara.textContent = "year: " + movies[i].year + "vu :  " + movies[i].seen;
        mydiv.appendChild(myH1);
        mydiv.appendChild(myPara);
        section.appendChild(mydiv)
    }
}

// function populateHeader(jsonObj) {
//     var myH1 = document.createElement("h1");
//     myH1.textContent = jsonObj["squadName"];
//     header.appendChild(myH1);

//     var myPara = document.createElement("p");
//     myPara.textContent = "Hometown: " + jsonObj["homeTown"] + jsonObj["formed"];
//     header.appendChild(myPara);
// }
// function showHeroes(jsonObj) {
//     var heroes = jsonObj["members"];

//     for (var i = 0; i < heroes.length; i++) {
//         var myArticle = document.createElement("article");
//         var myH2 = document.createElement("h2");
//         var myPara1 = document.createElement("p");
//         var myPara2 = document.createElement("p");
//         var myPara3 = document.createElement("p");
//         var myList = document.createElement("ul");

//         myH2.textContent = heroes[i].name;
//         myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
//         myPara2.textContent = "Age: " + heroes[i].age;
//         myPara3.textContent = "Superpowers:";

//         var superPowers = heroes[i].powers;
//         for (var j = 0; j < superPowers.length; j++) {
//             var listItem = document.createElement("li");
//             listItem.textContent = superPowers[j];
//             myList.appendChild(listItem);
//         }

//         myArticle.appendChild(myH2);
//         myArticle.appendChild(myPara1);
//         myArticle.appendChild(myPara2);
//         myArticle.appendChild(myPara3);
//         myArticle.appendChild(myList);

//         header.appendChild(myArticle);
//     }
// }

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
