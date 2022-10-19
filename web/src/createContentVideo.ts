//@ts-ignore
import video_1 from './assets/video/1.mp4'
//@ts-ignore
import video_2 from './assets/video/2.mp4'

export const nameVideo = [
    'Видео Один',
    'Видео Два'
];

export const list_video = () => {
    const arr = [];
    arr.push(video_1)
    arr.push(video_2)
    return arr
}

export const createContentVideo = (srcVideo: string) => {
    const video = document.createElement('video')
    video.setAttribute('controls', 'controls')
    video.classList.add('video__item')
    // video.setAttribute('width', '100')
    // video.setAttribute('height', '100')
    const source = document.createElement('source')
    source.setAttribute('src', srcVideo)
    source.setAttribute('type', 'video/mp4')
    source.setAttribute('codecs', 'avc1.42E01E, mp4a.40.2')
    video.insertAdjacentElement('afterbegin', source)
    return video
}