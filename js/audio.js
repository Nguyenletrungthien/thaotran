function playMusic(){
    var myAudio = document.getElementById('playAudio');
    if (myAudio.duration > 0 && !myAudio.paused) {
        //Its playing...do your job

    } else {
      myAudio.play()
      //Not playing...maybe paused, stopped or never played.

    }
  }
  var body = document.getElementsByTagName("body")[0];
  body.addEventListener("click",function(ev){
    playMusic()
  })
  