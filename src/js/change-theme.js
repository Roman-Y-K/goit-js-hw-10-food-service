import { Theme } from "./theme";


const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');


bodyRef.addEventListener('change', changeBodyTheme);


bodyRef.classList.add(Theme.LIGHT);


function changeBodyTheme() {
    if (checkboxRef.checked) {
       onDarkTheme();
    } else
       onLightTheme();
};

savedBodyTheme();


function onDarkTheme() {
    bodyRef.classList.replace( Theme.LIGHT, Theme.DARK), setLocalStorageDark();
    
};

function onLightTheme() {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT), setLocalStorageLight();
};

function savedBodyTheme() {

    const savedTheme = localStorage.getItem('theme');
   
    if (savedTheme === Theme.DARK) {
        bodyRef.classList.replace(Theme.LIGHT, savedTheme);
         
    };

    if (bodyRef.classList.contains(Theme.DARK)) {
        checkboxRef.checked = true;
     
    };
};

function setLocalStorageDark() {
    localStorage.setItem('theme', Theme.DARK);
};

function setLocalStorageLight() {
    localStorage.setItem('theme', Theme.LIGHT);
    
}
