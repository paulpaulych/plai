import React from "react"
import {Button} from "react-bootstrap"

export function PlayerControls(props: PlayerControlsProps) {
	return (
		<div className="PlayerControls">
			<Button disabled = { !props.prevEnabled } onClick = {() => props.onPrev()}>prev</Button>
			<Button onClick={() => props.onPlay()}>
				{ props.isPlaying ? "play" : "pause" }
			</Button>
			<Button disabled = { !props.nextEnabled } onClick = {() => props.onNext()}>next</Button>
		</div>
	)
}

type PlayerControlsProps = {
    isPlaying: boolean
    nextEnabled: boolean
    prevEnabled: boolean
    onPlay: () => void
    onNext: () => void
    onPrev: () => void
}
