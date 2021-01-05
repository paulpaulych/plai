import {BallView} from "./BallView"
import React, {ReactElement} from "react"
import {MatchConfig, MatchState} from "../api/game"
import "./ArkanoidField.css"

export function ArkanoidField(props: PlayerScreenProps): ReactElement {
	return (
		<div className="ArkanoidField">
			<BallView
				radius={props.matchConfig.ballRadius}
				pos={props.matchState.ball.pos}
			/>
		</div>
	)
}

export type PlayerScreenProps = {
    matchConfig: MatchConfig
    matchState: MatchState
}


