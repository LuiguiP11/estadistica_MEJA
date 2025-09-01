
window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  const logoJhiros = document.getElementById('logo-jhiros');
  const logoUsac = document.getElementById('logo-usac');
  
  // Si no existe el splash screen, no hacer nada.
  if (!splashScreen) {
    if(mainContent) {
      mainContent.classList.add('visible');
    }
    return;
  }

  const TOTAL_DURATION = 4000; // 4 segundos
  const LOGO_SWITCH_TIME = 2000; // 2 segundos

  // 1. Mostrar primer logo
  setTimeout(() => {
    if (logoJhiros) logoJhiros.classList.add('visible');
  }, 100);

  // 2. Cambiar al segundo logo
  setTimeout(() => {
    if (logoJhiros) logoJhiros.classList.remove('visible');
    if (logoUsac) logoUsac.classList.add('visible');
  }, LOGO_SWITCH_TIME);

  // 3. Ocultar splash y mostrar contenido principal
  setTimeout(() => {
    splashScreen.classList.add('hidden');
    if (mainContent) mainContent.classList.add('visible');
  }, TOTAL_DURATION);
});
