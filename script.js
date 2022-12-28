document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value
    if(song !== ''){
        let songArray = song.toLowerCase().split('');
        playComposition(songArray);
    }
})

function playSound(sound) {
    let tocarBateria = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key='${sound}']`)


    if(tocarBateria){
        tocarBateria.currentTime = 0
        tocarBateria.play()
    }

    if(keyElement){
        keyElement.classList.add("active")
        setTimeout(()=>{
            keyElement.classList.remove("active")
        }, 300)
    }
}

function playComposition(songArray) {
    const timer = (seconds) => {
        let time = seconds * 1000;
        return new Promise(res => setTimeout(res, time))
    }

    async function tocarBatida() {
        for(let i=0;i<songArray.length;i++){
            let tocarBateria = document.querySelector(`#s_key${songArray[i]}`);
            let keyElement = document.querySelector(`div[data-key='key${songArray[i]}']`)


            if(tocarBateria){
                tocarBateria.currentTime = 0
                tocarBateria.play()
            }

            if(keyElement){
                keyElement.classList.add("active")
                setTimeout(()=>{
                    keyElement.classList.remove("active")
                }, 300)
            };

            await timer(0.5);
                }
    }

    tocarBatida()
}