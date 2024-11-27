import './css/styles.css';
import {renderHero} from './modules/home';
import {renderInfo} from './modules/home';

document.addEventListener("DOMContentLoaded", e => {
    renderHero();
    renderInfo();
});