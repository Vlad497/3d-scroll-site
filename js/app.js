let zSpacing = -1000;
let lastPos = zSpacing / 2.5;

let frames = Array.from(document.getElementsByClassName('frame'));

zVals = [];

window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;


    lastPos = top;

    frames.forEach((element, index) => {
        zVals.push(index * zSpacing + zSpacing);
        zVals[index] += delta * -2.5;
        let frame = frames[index],
            transform = `translateZ(${zVals[index]}px)`,
            opacity = zVals[index] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
        frame.setAttribute('style', `transform:${transform}; opacity:${opacity}`);
    });
}

window.scrollTo(0, 1);

let soundButton = document.querySelector('.sound__btn'),
    audio = document.querySelector('.audio');


soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused');
    audio.paused ? audio.play() : audio.pause();
});

window.onfocus = () => {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play();
}

window.onblur = () => {
    audio.pause();
}