window.onload = function() {
    var audios = document.getElementsByClassName('audios');
    for(var i = 0; i < audios.length; i++){
        audios[i].addEventListener('play', pauseAllOtherAudios, false);
    }

    function pauseAllOtherAudios() {
        for(var j = 0; j < audios.length; j++){
            if(audios[j] != this) {
                audios[j].pause();
            }
        }
    }
}

