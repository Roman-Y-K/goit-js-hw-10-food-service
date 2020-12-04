import foodTemplate from "../template/food.hbs";
import food from "../menu.json";
import "../css/styles.css";

const galleryRef = document.querySelector('.js-menu');


const foodMarkap = foodTemplate(food);

galleryRef.insertAdjacentHTML('afterbegin', foodMarkap )
