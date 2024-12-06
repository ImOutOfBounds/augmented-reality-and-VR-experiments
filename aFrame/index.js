
const launcher = document.querySelector('#beybladeLauncher');
const scene = document.querySelector('#beybladeScene');

const musicEntity = document.querySelector('#music');
const displayImage = document.querySelector('#display');

const musicTracks = ['#musica1', '#musica2', '#musica3'];
const imageFiles = ['#img1', '#img2', '#img3'];

launcher.setAttribute('visible', true);
scene.setAttribute('visible', false);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        const launcherVisible = launcher.getAttribute('visible');
        launcher.setAttribute('visible', !launcherVisible);
        scene.setAttribute('visible', launcherVisible);
        
        console.log(
            `Launcher está ${!launcherVisible ? 'visível' : 'invisível'}, Scene está ${launcherVisible ? 'visível' : 'invisível'}`
        );
    }
});



let currentIndex = 0;

musicEntity.setAttribute('sound', `src: ${musicTracks[currentIndex]}; autoplay: true; loop: true`);
displayImage.setAttribute('src', imageFiles[currentIndex]);

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyM') {
        currentIndex = (currentIndex + 1) % musicTracks.length;
        musicEntity.setAttribute('sound', `src: ${musicTracks[currentIndex]}; autoplay: true; loop: true`);
        displayImage.setAttribute('src', imageFiles[currentIndex]);
        console.log(`Música atual: ${musicTracks[currentIndex]}`);
        console.log(`Imagem atual: ${imageFiles[currentIndex]}`);
    }
});

