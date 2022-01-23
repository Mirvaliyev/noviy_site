let in_audio=document.getElementById('in_audio');
setTimeout(() => {
    in_audio.play();
}, 4000);

let icon_audio=document.getElementById('icon_audio');
let site_audio=document.getElementById('site_audio');
icon_audio.onclick=function(){
    if(site_audio.paused){
        site_audio.play();
        icon_audio.name="pause-circle-outline";
    }
    else{
        site_audio.pause();
        icon_audio.name="play-circle-outline";
    }
}