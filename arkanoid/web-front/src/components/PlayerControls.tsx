import {useState} from "react";

export function PlayerControls(props: PlayerControlsProps) {
    const [isPlaying, setIsPlaying] = useState<boolean>()
    return (
        <div className="PlayerControls">
            <button onClick={() =>{
                props.onPlayPressed();
                setIsPlaying(!isPlaying)
            }}
            >
                play
            </button>
            { isPlaying && <h1>Playing...</h1> }
        </div>
)
}

type PlayerControlsProps = {
  onPlayPressed: () => void
}
