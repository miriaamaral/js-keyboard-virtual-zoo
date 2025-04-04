const pianoKeys = document.querySelectorAll(".piano-keys .key"); 

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio("src/tunes/baleia.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
};

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click", ()=>playTune(key.dataset.key));
});

document.addEventListener("keydown", (e)=>{
    playTune(e.key);
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = ()=> {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);