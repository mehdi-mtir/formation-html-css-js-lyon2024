
function buttonClickedHandler(){
    let input = document.getElementById("exampleInputEmail1");
    console.log(input.value);

    let password = document.getElementById("exampleInputPassword1");
    console.log(password.value);

    let checkbox = document.getElementById("exampleCheck1");
    console.log(checkbox.checked);

    let resultBox = document.getElementById("resultat");
    resultBox.innerHTML = "<ul> <li>" + input.value + "</li><li>" + password.value + "</li><li>" + checkbox.checked + "</li></ul>";
}

function main(){
    //console.log("Main function");
    //Sélecteurs du DOM
    //1. document.getElementById
    /*
    console.log(input);
    input.value = "test@gmail.com";*/

    //Activer l'écouteur de l'événement clique sur le bouton submit
    let btnSubmit = document.getElementById("boutonSubmit");
    btnSubmit.addEventListener("click", buttonClickedHandler);

}

window.addEventListener("load", main); //main est une callback function