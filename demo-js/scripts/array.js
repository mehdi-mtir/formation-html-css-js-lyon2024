let ebooks = [
    {id : 1, title : "Power of Habits ---", author : "Auteur 1", price : 30},
    {id : 2, title : "ASP.NET 8 et C# 12 --", author : "Auteur 2", price : 25},
    {id : 3, title : "Scrum --", author : "Auteur 3", price : 23},
];


//Rechercher un objet dans un tableau d'objets

function findEbook(id){
    return ebooks.find(ebook=>ebook.id===id);
}

console.log(findEbook(3));


let ebook3Edited = {id : 3, title : "Scrum fundamentals", author : "New Author", price : 40};

function editBook(ebookEdited){
    ebooks = ebooks.map(
        ebook => (ebook.id === ebookEdited.id)?ebookEdited:ebook
    )
}

editBook(ebook3Edited);

ebooks.forEach(
    ebook=>console.log(JSON.stringify(ebook))
)