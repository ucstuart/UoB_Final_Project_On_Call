import React from "react";
import audioFile from "./audio-files/file_example_MP3_700KB.mp3"

const PlayAudio = () => {
const  audio = new Audio(audioFile);

const start = () => {
    audio.play();
}

const pause = () => {
    audio.pause();
}

return (
    <div>
        <button onClick={start}>Play</button>
        <button onClick={pause}>Pause</button>

    </div>
)
}

export default PlayAudio;