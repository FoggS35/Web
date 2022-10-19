//@ts-ignore
import audio_1 from './assets/audio/1.mp3'
//@ts-ignore
import audio_2 from './assets/audio/2.mp3'
//@ts-ignore
import audio_3 from './assets/audio/3.mp3'

export const nameAudio = [
    'Песня Один',
    'Песня Два',
    'Песня Три',
]

export const list_audio = () => {
    const arr = []
    arr.push(audio_1)
    arr.push(audio_2)
    arr.push(audio_3)
    return arr
}

export const createContentAudio = (srcAudio: string) => {
    const audio = document.createElement('audio')
    audio.setAttribute('controls', 'controls')
    const source = document.createElement('source')
    source.setAttribute('src', srcAudio)
    source.setAttribute('type', 'audio/mpeg')
    audio.insertAdjacentElement('afterbegin', source)
    return audio
}