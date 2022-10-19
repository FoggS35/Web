//@ts-ignore
import image_1 from './assets/images/1.jpg'
//@ts-ignore
import image_2 from './assets/images/2.jpg'
//@ts-ignore
import image_3 from './assets/images/3.jpg'
//@ts-ignore
import image_4 from './assets/images/4.gif'

export const nameImg = [
    'Водяная мельница',
    'Горы',
    'Маленькая италия',
    'GIF MASTER'
]


export const list_img = () => {
    const arr = []
    arr.push(image_1)
    arr.push(image_2)
    arr.push(image_3)
    arr.push(image_4)
    return arr
}


export const createContentImage = (srcImage: string) => {
    const tagImg = document.createElement('img');
    tagImg.classList.add('item__img');
    tagImg.src = srcImage
    return tagImg
}

