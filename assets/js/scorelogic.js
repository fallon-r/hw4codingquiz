

// Render Scores
function scoreRender(){

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    console.log(highscores)

    for(var i = 0; i < highscores.length; i++){

        $("tbody").append("<tr><th scope='row'>" + (i + 1) + "<td>" + highscores[i].initials + "</td><td>" + highscores[i].score + "</td>");

    }

    


}

//Clear local storage of items; only clears stored scores; does not touch other stored items. 

$("#cls").click(function(event){
    console.log("clicked me ")

    localStorage.clear();

    location.reload();


})

scoreRender();