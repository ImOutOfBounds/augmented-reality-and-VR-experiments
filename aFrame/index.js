// Obtém os modelos
const launcher = document.querySelector('#beybladeLauncher');
const scene = document.querySelector('#beybladeScene');

// Define o estado inicial
launcher.setAttribute('visible', true);
scene.setAttribute('visible', false);

// Adiciona um evento para a barra de espaço
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        // Alterna a visibilidade dos modelos
        const launcherVisible = launcher.getAttribute('visible');
        launcher.setAttribute('visible', !launcherVisible);
        scene.setAttribute('visible', launcherVisible);
        
        console.log(
            `Launcher está ${!launcherVisible ? 'visível' : 'invisível'}, Scene está ${launcherVisible ? 'visível' : 'invisível'}`
        );
    }
});
