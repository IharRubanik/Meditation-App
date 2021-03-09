// (function() {
  
    let buttonRain = document.getElementById('rain'),
        buttonSun = document.getElementById('sum'), 
        video = document.getElementById('video'),
         audio = document.getElementById('audio'),
         pause = document.getElementById('pause'),
         play = document.getElementById('play'),
        button120s = document.getElementById ('120s'),
        button300s = document.getElementById ('300s'),
        button1000s = document.getElementById ('1000s'),
        fakeDuration = 600;
   
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

        video.ontimeupdate = progressUpdate;
        function progressUpdate() {
        let videoTime = video.currentTime;
        let videoZ = Math.floor(videoTime);
        }


        // video.ontimeupdate = function() {
        //     let currentTime = video.currentTime;
        //     let elapsed = fakeDuration - currentTime;
        //     // console.log(elapsed);

        //     let seconds = Math.floor(elapsed % 60);
        //     // console.log(seconds);
        //     let minutes = Math.floor(elapsed / 60);
        //     // timeDisplay.textContent = `${minutes}:${seconds}`;
        //     console.log(seconds);       
           
        //     // outline.style.strokeDashoffset = progress;
          
        //     if (currentTime >= fakeDuration) {
        //       song.pause();
        //       song.currentTime = 0;
        //       play.src = "./svg/play.svg";
        //       video.pause();
        //     }
        //   };