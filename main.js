(function() {
  
    let buttonRain = document.getElementById('rain'),
        buttonSun = document.getElementById('sum'),
        video = document.getElementById('video'),
         audio = document.getElementById('audio'),
         pause = document.getElementById('pause'),
         play = document.getElementById('play'),
        button120s = document.getElementById ('120s'),
        button300s = document.getElementById ('300s'),
        button1000s = document.getElementById ('1000s');
   
        buttonRain.onclick = function () {
            video.src = "/video/rain.mp4";
            audio.src = "/audio/rain.mp3";
            play.style.display = "none";
            pause.style.display = "unset"; 
        } 

        buttonSun.onclick = function () {
            video.src = "/video/sea.mp4";
            audio.src = "/audio/sea.mp3";
            play.style.display = "none";
            pause.style.display = "unset";
        }
        
        pause.onclick = function () {
            video.pause();
            audio.pause();
            play.style.display = "unset";
            pause.style.display = "none";
        }

        play.onclick = function() {
            video.play();
            audio.play();
            play.style.display = "none";
            pause.style.display = "unset";
        }

        button120s.onclick = function() {
            if (video.current.Time() = 120) {
                video.pause()
                audio.pause()
            }
        }
    
})();
