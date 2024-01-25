
let ebooks = [
    {id : 1, title : "Power of Habits ---", author : "Auteur 1", price : 30},
    {id : 2, title : "ASP.NET 8 et C# 12 --", author : "Auteur 2", price : 25},
    {id : 3, title : "Scrum --", author : "Auteur 3", price : 23},
]

function showBooksList(){
    //Générer le nouveau code HTML à injecter : <tr> <td>..</td>...</tr>
    let newHTML = "";
    for(let i = 0; i<ebooks.length; i++){
        newHTML += "<tr>";
            newHTML += "<td>" + ebooks[i].id + "</td>";
            newHTML += "<td>" + ebooks[i].title + "</td>";
            newHTML += "<td>" + ebooks[i].author + "</td>";
            newHTML += "<td>" + ebooks[i].price + "</td>";
            newHTML += "<td><button class='btn btn-primary'>Editer</button></td>";
            newHTML += "<td><button class='btn btn-danger'>Supprimer</button></td>";
        newHTML += "</tr>";
    }

    //Récupérer l'élément tbody et y injecter le code HTML
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = newHTML;
}

function init(){
    showBooksList();
}

window.addEventListener("load", init);
