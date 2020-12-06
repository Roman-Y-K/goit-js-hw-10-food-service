import { Theme } from "./theme";


const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');


bodyRef.addEventListener('change', changeBodyTheme);


bodyRef.classList.add(Theme.LIGHT);


function changeBodyTheme() {
    if (checkboxRef.checked) {
        onChangeTheme(Theme.LIGHT, Theme.DARK);
    } else
        onChangeTheme(Theme.DARK, Theme.LIGHT);
};

savedBodyTheme();


function onChangeTheme(oldTheme, newTheme) {
    bodyRef.classList.replace(oldTheme, newTheme);
    setLocalStorageTheme(newTheme);
    
};

function setLocalStorageTheme(newTheme) {
    localStorage.setItem('theme', newTheme);
};

function savedBodyTheme() {

    const savedTheme = localStorage.getItem('theme');
   
    if (savedTheme === Theme.DARK) {
        bodyRef.classList.replace(Theme.LIGHT, savedTheme);
        checkboxRef.checked = true;
         
    };
};


