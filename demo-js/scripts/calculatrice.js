
function calcul(op){
    const value1 = getNumberValue("valeur1");
    const value2 = getNumberValue("valeur2");
    if(value1 !== null && value2 !== null){
        switch(op){
            case "+" : showResult(value1 + value2); break;
            case "-" : showResult(value1 - value2); break;
            case "*" : showResult(value1 * value2); break;
            case "/" : 
                if(value2!== 0)
                    showResult(value1 + value2); 
                else
                    showResult("Division par zéro impossible!")
                break;
        }
    }    
    else
        showResult("Valeurs saisies incorrectes!")
}

/*function add(){
    //console.log("Add function called!")
    const value1 = getNumberValue("valeur1");
    const value2 = getNumberValue("valeur2");
    if(value1 !== null && value2 !== null)
        showResult(value1 + value2);
    else
        showResult("Valeurs saisies incorrectes!")
}

function soustract(){
    const value1 = getNumberValue("valeur1");
    const value2 = getNumberValue("valeur2");
    if(value1 !== null && value2 !== null)
        showResult(value1 - value2);
    else
        showResult("Valeurs saisies incorrectes!")
}

function multipl(){
    const value1 = getNumberValue("valeur1");
    const value2 = getNumberValue("valeur2");
    if(value1 !== null && value2 !== null)
        showResult(value1 * value2);
    else
        showResult("Valeurs saisies incorrectes!")
}

function division(){
    const value1 = getNumberValue("valeur1");
    const value2 = getNumberValue("valeur2");
    if(value1 !== null && value2 !== null && value2 !== 0)
        showResult(value1 / value2);
    else
        showResult("Valeurs saisies incorrectes!")
}
*/

function showResult(res){
    const paragResult = document.getElementById("resultat");
    paragResult.innerText = "Resultat : " + res;
}

function getNumberValue(inputId){
    const value = document.getElementById(inputId).value;
    if(isNaN(value) || value === "")
        return null;
    else
        return Number(value);
}

function addBtnListener(idBtn, eventType, eventHandler){
    //let btn = document.getElementById(idBtn);
    let btn = document.querySelector("#idBtn")
    btn.addEventListener(eventType, eventHandler);

    return btn;
}


function demoSelecteursEtOprationsCSS(){

    let liste = document.querySelector(".operation ul");
    liste.classList.toggle("hide");

    let listItems = document.querySelectorAll(".operation ul li");
    console.log(listItems)


    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.color = "#00f";
        listItems[i].innerText = "Operation " + listItems[i].innerText
    }
}

 

function init(){
    const btnAdd = addBtnListener("boutonAdd", "click", function(){calcul("+");}); //()=>calcul("+") : callback
    const btnSoustract = addBtnListener("boutonSoustract", "click", ()=>calcul("-"));
    const btnMultipl = addBtnListener("boutonMutipl", "click", ()=>calcul("*"));
    const btnDiv = addBtnListener("boutonDiv", "click", ()=>calcul("/"));

    const btnOperations = document.querySelector(".btn-success");
    //console.log(btnOperations);
    btnOperations.addEventListener("click", demoSelecteursEtOprationsCSS);
}

window.addEventListener("load", init);