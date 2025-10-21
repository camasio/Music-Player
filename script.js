let song = document.getElementById("song");
let progress = document.getElementById("progress");
let control = document.getElementById("crtl-icon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Update progress bar as song plays
progress.onchange =function(){
    song.currentTime = progress.value;
    song.play();
    control.classList.remove("fa-play");
    control.classList.add("fa-pause");
}

function playPause(){
    if(control.classList.contains("fa-play")){
        song.play();
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
    }
    else {
        song.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
    }
}