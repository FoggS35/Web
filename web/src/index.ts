import {createCard} from "./card";
import './style/main.scss'
import {createContentImage} from "./createContentImage";
import {list_img, nameImg} from "./createContentImage";
import {createContentAudio, list_audio, nameAudio} from "./createContentAudio";
import {createContentVideo, list_video, nameVideo} from "./createContentVideo";


const mainBlock = document.querySelector('#main');


for (let i = 0; i < list_img().length; i++){
    const block = createCard(nameImg[i],createContentImage(list_img()[i]));
    if(mainBlock) mainBlock.insertAdjacentElement('afterbegin', block);
}

for (let i = 0; i < list_audio().length; i++){
    const block = createCard(nameAudio[i],createContentAudio(list_audio()[i]));
    if(mainBlock) mainBlock.insertAdjacentElement('afterbegin', block);
}

for (let i = 0; i < list_video().length; i++){
    const block = createCard(nameVideo[i],createContentVideo(list_video()[i]));
    if(mainBlock) mainBlock.insertAdjacentElement('afterbegin', block);
}

