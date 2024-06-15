function Audio(props) {
    return (
        <audio
            ref={props.audioRef}
            src={props.src}
            onTimeUpdate={props.onTimeUpdate}
            onLoadedMetadata={props.onLoadedMetadata}
        />
    )
}

export default Audio;
