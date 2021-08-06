import 'regenerator-runtime';
import App from './view/app';
import swRegister from './utils/sw-register';
// import styles
import '../styles/style.css';
// component
import './component/footer';
import './component/header';
import './component/navbar';

const app = new App({
  button: document.querySelector('nav-bar').shadowRoot.querySelector('#hamburgerButton'),
  drawer: document.querySelector('nav-bar').shadowRoot.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
