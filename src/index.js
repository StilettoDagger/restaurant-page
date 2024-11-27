import './css/styles.css';
import {renderHero, renderInfo} from './modules/home';

document.addEventListener("DOMContentLoaded", e => {
    renderHero();
    renderInfo();
});