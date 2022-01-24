let sa=document.getElementById('sa');
setTimeout(function(){
    if(sa.paused){
        sa.play();
    }
}, 4000);


let btn_audio=document.getElementById('btn_audio');
let span_audio=document.querySelectorAll('.span_audio');
let site_audio=document.getElementById('site_audio');
btn_audio.onclick=function(){
    if(site_audio.paused){
        site_audio.play();
        for(let i=0;i<span_audio.length;i++){
            span_audio[i].classList.toggle('span_toggle');
        }
    }
    else{
        site_audio.pause();
        for(let j=0;j<span_audio.length;j++){
            span_audio[j].classList.toggle('span_toggle');
        }
    }
}