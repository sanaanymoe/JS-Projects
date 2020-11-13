
window.addEventListener('keydown', (e) => {
    // console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log(audio)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    // console.log(key)

    if (!audio) return;
    audio.currentTime = 0; //rewind it to the start to avoid delay when hiting the same key multiple times 
    audio.play();

    key.classList.add('playing')
    
    setTimeout( () => {
        key.classList.remove('playing')
    },100)
    

})