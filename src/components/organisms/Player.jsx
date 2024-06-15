import { useState, useEffect, useRef } from 'react'
import mysql from "../../data/mysql"
import Controllers from "../molecules/Controllers"
import Image from "../atoms/Image"
import './player.css'

function Player() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const audioRef = useRef(null)

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.load()
        if (isPlaying) {
            audioRef.current.play()
        }
    }, [currentSongIndex])

    const handlerClickPlay = () => {
        setIsPlaying(!isPlaying)
    }

    const handlerClickBack = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? mysql.music.length - 1 : prevIndex - 1))
        setIsPlaying(true)
    }

    const handlerClickNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex === mysql.music.length - 1 ? 0 : prevIndex + 1))
        setIsPlaying(true)
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration)
    }

    const handleProgressChange = (event) => {
        const newTime = (event.target.value / 100) * duration
        audioRef.current.currentTime = newTime
        setCurrentTime(newTime)
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    const currentSong = mysql.music[currentSongIndex];
    const playPauseIcon = isPlaying ? "/icons/Pause.png" : "/icons/Play.png";

    return (
        <div id="player-container">
            <div id="img-container">
                <Image image={currentSong.image} />
            </div>
            <div id="controllers-container">
                <Controllers
                    name={currentSong.name}
                    time={`${formatTime(currentTime)} / ${formatTime(duration)}`}
                    image={playPauseIcon}
                    play={handlerClickPlay}
                    back={handlerClickBack}
                    next={handlerClickNext}
                    progressValue={(currentTime / duration) * 100 || 0}
                    onProgressChange={handleProgressChange}
                    audioRef={audioRef}
                    src={currentSong.song}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />
            </div>
        </div>
    )
}

export default Player
