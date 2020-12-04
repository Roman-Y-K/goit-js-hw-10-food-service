import { Theme } from './theme';


const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');


bodyRef.addEventListener('change', changeBodyTheme);

savedBodyTheme();




function changeBodyTheme() {
    if (checkboxRef.checked) {
        onDarkTheme();
    } else
        onLightTheme();
};

function onDarkTheme() {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK) && localStorage.setItem('theme', Theme.DARK);
    
};

function onLightTheme() {
     bodyRef.classList.replace(Theme.DARK, Theme.LIGHT) && localStorage.setItem('theme', Theme.LIGHT);
};

function savedBodyTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    bodyRef.classList.add(savedTheme);
    
    if (bodyRef.classList.contains(Theme.DARK)) { 
        checkboxRef.checked = true;
    }
};

