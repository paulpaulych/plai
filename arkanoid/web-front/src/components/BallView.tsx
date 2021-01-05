import {Pos} from "../api/game"
import React, {CSSProperties} from "react"

type BallViewProps = {
    pos: Pos,
    radius: number
}

export function BallView(props: BallViewProps){
	console.log(`${JSON.stringify(props)}`)
	const ballStyle: CSSProperties = {
		display: "block",
		position: "relative",
		left: props.pos.x + "%",
		right: props.pos.x + "%",
		height: 2*props.radius + "%",
		width: 2*props.radius + "%",
		borderRadius: "50%",
		backgroundColor: "blue"
	}
	return (
		<span style={ballStyle}/>
	)
}