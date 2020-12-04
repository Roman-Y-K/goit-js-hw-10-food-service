import { Theme } from "./theme";


const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');


bodyRef.addEventListener('change', changeBodyTheme);


bodyRef.classList.add(Theme.LIGHT)
savedBodyTheme();


function changeBodyTheme() {
    if (checkboxRef.checked) {
        console.log(1);
        onDarkTheme();
    } else
        onLightTheme();
};



function onDarkTheme() {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)  && localStorage.setItem('theme', Theme.DARK);
    console.log(2);
    
};

function onLightTheme() {
    console.log(3);
     bodyRef.classList.replace(Theme.DARK, Theme.LIGHT)  && localStorage.setItem('theme', Theme.LIGHT);
};

function savedBodyTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log(4);
    
    bodyRef.classList.replace(Theme.LIGHT, savedTheme);
    console.log(5);
    
    if (bodyRef.classList.contains(Theme.DARK)) { 
        checkboxRef.checked = true;
        console.log(6);
    }
};

