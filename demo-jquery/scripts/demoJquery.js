$(document).ready(
    function(){
        console.log("Ready!");
        $("button").on("click", ()=>{
            $("h1").toggle();
            $("p").html("<a href='https://jquery.com/' target='_blank' >Lien vers le site de Jquery</a> ")
        });
    }
)