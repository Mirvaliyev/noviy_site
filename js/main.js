let s=1
$('#menu_icon').click(function () { 
    $('.left_menu').toggleClass('left_menu_show');
    if(s%2==1){
        $(this).attr('name', 'remove-outline');
    }
    else{
        $(this).attr('name', 'reorder-two-outline');
    }
    s++
});
const sa=document.querySelector('#sa');
window.addEventListener('load', function(){
    setTimeout(function(){
        document.body.style.opacity='1';
        sa.play();
    }, 3000);

})
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



