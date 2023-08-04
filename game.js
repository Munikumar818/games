var gpattern=[];
var level=0;
var userclickedbtn;
var userclickedpattern=[];
var col=["red","blue","green","yellow"];
var c=0;
var start=false;



$(".btn").on("click",function(){
    userclickedbtn=this.id;
    userclickedpattern.push(this.id);
    playaudio(this.id);
    animatepress(this.id);

    checkAnswer(userclickedpattern.length-1);    

})
var s;

function checkAnswer(clevel){
    if(gpattern[clevel]==userclickedpattern[clevel]){
        for(var i=0;i<=clevel;i++){
            if(gpattern[i]==userclickedpattern[i]){
                s=0
            }
            else{
                s=1
            }
        }
        if(s==0 && userclickedpattern.length==gpattern.length){
            console.log("success");

            setTimeout(function(){
                nextseq();
            },1000);

        }

    }
    else{
        playaudio("wrong")
        console.log("wrong");
        $("h1").text("Game Over");
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },1000);
        start=false;
        level=0;
        gpattern=[];
        userclickedpattern=[];
        $("h1").html("Game Over <br> Press any key to restart ")
    }
}
function nextseq(){
    userclickedpattern=[];
    $("#level-title").text("level    "+level);
    level++;
    var ran=Math.floor(Math.random()*4);
    var rancol=col[ran];
    gpattern.push(rancol);
    playaudio(rancol);
    $("#"+rancol).fadeOut().fadeIn();
    
}






function playaudio(nam){
    var naud=new Audio(nam+".mp3");
    naud.play();
}

function animatepress(namm){
    $("." + namm).addClass("pressed")
    setTimeout(function() { 
        $("."+namm).removeClass("pressed");
     },100);
    
}

$(document).on("keydown",function(){
    if(!start){
    nextseq();
    start=true;
    }
})
