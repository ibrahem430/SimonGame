var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0; 
var started = false;
var b=0;
function nextSequence(){
    level++;
    $("h1").text("level "+level);
    
 
    var randomNumber=Math.floor(Math.random() * 4);
    var randomChosenColour =buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

   
    


}
function playSound(name) {


   
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  
}

 function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){ $("#"+currentColour).removeClass("pressed")},100);
}

 function checkAnswer(currentLevel){
    userClickedPattern.push(currentLevel);
    if(gamePattern[b]==userClickedPattern[b]){
        b++;
        if(gamePattern.length==b){
            b=0;
           userClickedPattern.length=0;
          setTimeout( function(){ nextSequence()},1000);
        }
       }
        else{


            b=0;
            $("h1").text("game over , Press A Key to Start ");
            started=false;
            level=0;
            userClickedPattern.length=0;
           document.querySelector("body").style.backgroundColor="red";
           setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#011F3F";
           },100);
           var audio = new Audio("sounds/" + "wrong" + ".mp3");
            audio.play();
    }
}

 


 

 $(".btn").on("click", function() {
    var userChosenColour =$(this).attr("id");
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userChosenColour);
  

 });

 $(document).keydown(function(){
    if(! started){
    $("h1").text("level "+level);
    nextSequence();
   
started=true;
   }
 });