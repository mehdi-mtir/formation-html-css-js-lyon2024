        //Déclration de variables en JS et typage dynamique
        
        var message = "Mon premier message"; //Portée globale ou une portée de fonction
        //A partir de 2015 et EcmaScript 6 (ES6)
        let message2 = "Mon deuxième message"; //Différence de portée de la variable : visible uniquement dans le bloc ou la variable est déclaré
        //console.log(window.message); //portée globale
        const PI = 3.14;

        //Types de valeurs
        //1. types simples : number, boolean, string, null, undefined
        //2. types complexes : tableaux, objets...

        //Déclaration d'un tableau
        var notes1 = new Array(); //notation explicite
        /*
        var notes2 = []; //notation litérale
        note2[0] = 10;
        note2[1] = 14;
        */
       var notes2 = [16, 14];

       //Déclaration des objets
       let personne = new Object();//notation explicite
       /*let personne2 = {}; //notation litérale
       personne2.nom = "Messi";
       personne2.prenom = "Lionel";*/
       let personne1 = {
        nom : "Mbappe",
        prenom : "Kiliane"
       }

       let personne2 = {
        nom : "Messi",
        prenom : "Lionel"
       }

       let personnes = [personne1, personne2];
       console.log(personnes[0].nom);
       //console.log(personne2.nom);

       //stuctures conditionnelles :

       let max = 0
       //1. if ... else
       /*if(notes2[0] < notes2[1]){
        max = notes2[1];
       }
       else{
        max = notes2[0];
       }*/
       //Version simplifiée avec l'opérateur ternaire
       max = (notes2[0] < notes2[1])  ? notes2[1] : notes2[0];

       //console.log(max);

       //2. switch case..
       let couleur = "Pink";
       switch(couleur){
        case "red":
            //console.log("rouge"); break;
        case "black":
            //console.log("noir"); break;
        case "Green":
            //console.log("vert"); break;
        default :
            //console.log("Couleur inconnue");
       }


       //structures itératives
       //1. Boucle for
       for(let comp = 0; comp < 10; comp++){
        //console.log(comp);
       }

       //2. Boucle while
       let comp = 0
       while(comp < 10){
        //console.log(comp);
        comp++;
       }

       //3.Boucle do...while
       /*let indice = 0;
       while(notes1.length < 10){
        do{
            var note = prompt("Veuiller saisir une note");
        }while(isNaN(note) || Number(note) > 20 || Number(note) < 0);
        //console.log("Note saisie : " + note);
        notes1[indice] = Number(note);
        indice ++;
       }

       console.table(notes1);


       //Calcul de la moyenne du tableau notes1
       let somme = 0;
       for(let i = 0; i < notes1.length; i++){
            somme += notes1[i];
       }

       let moyenne = somme / notes1.length;
       console.log("La moyenne des notes est : " + moyenne);*/


       //Déclaration des fonctions
       //1. Syntaxe classique
       /*function somme (tabNotes){
        let somme = 0;
        for(let i = 0; i < notes1.length; i++){
                somme += notes1[i];
        }
        return somme;
       }*/

       //2. Fonction anonyme
       /*let sommeFct = function(tabnotes){
        let somme = 0;
        for(let i = 0; i < notes1.length; i++){
                somme += notes1[i];
        }
        return somme;
       };*/
       //console.log(typeof(sommeFct));

       //3. Fonctions fléchées
       let sommeFct2 = (tabnotes) => {
            let somme = 0;
            for(let i = 0; i < tabnotes.length; i++){
                    somme += tabnotes[i];
            }
            return somme;
       };
       console.log(typeof(sommeFct2));

       function saisieNotes(nombreNotes){
            let indice = 0;
            let notes = [];
            while(notes.length < nombreNotes){
                do{
                    var note = prompt("Veuiller saisir une note");
                }while(isNaN(note) || Number(note) > 20 || Number(note) < 0);
                //console.log("Note saisie : " + note);
                notes[indice] = Number(note);
                indice ++;
            }
            return notes;
       }

       function calculMoyenne(notes){
            let sommeNotes = sommeFct2(notes);
            let moyenne = sommeNotes / notes.length;
            return moyenne;
            //return sommeFct2(notes)/notes.length
       }


       function main(){
            let notes = saisieNotes(5);
            console.log(calculMoyenne(notes));
       }

       main();



        //Opérateurs de compraison
        var note1 = 10;
        var note2 = '10';
        //console.log(note1 == note2); //opérateur d'égalité
        //console.log(note1 === note2); //opérateur d'équivalence





        //console.log(typeof(message)); //string
        message = 10;
        //console.log(typeof(message)); //number