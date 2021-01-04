let divRecup = document.getElementById('unGroDiv');

try {
    divRecup.innerHTML = "Du texte banal"
}
catch (error){
    alert("L'élément " + "divRecup" + " n'existe pas !")
}