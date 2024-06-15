import './controllers.css'
import Input from "../atoms/Input"
import Button from '../atoms/Button'
import Text from "../atoms/Text"
import Audio from '../atoms/Audio'

function Controllers(props) {
    return (
        <div id="controllers-container">  
            <div id="info-container">
                <div id="name-container">
                    <Text text={props.name}/>
                </div>
                <div id="bar-container">
                    <Text text={props.time}/>
                    <Input value={props.progressValue} onChange={props.onProgressChange}/>
                </div>
                <Audio
                    audioRef={props.audioRef}
                    src={props.src}
                    onTimeUpdate={props.onTimeUpdate}
                    onLoadedMetadata={props.onLoadedMetadata}
                />
            </div>
            <div id="controllers">
                <Button onClick={props.back} img="/icons/Back.png"/>
                <Button onClick={props.play} img={props.image}/>
                <Button onClick={props.next} img="/icons/Next.png"/>
            </div>
        </div>
    )
}

export default Controllers
