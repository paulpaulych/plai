import React, {useEffect, useState} from "react"
import {PlayerControls} from "./PlayerControls"
import {ArkanoidField} from "./ArkanoidField"
import {Match} from "../api/game"
import {Canvas} from "./Canvas"

export function Player(props: PlayerProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTick, setCurrentTick] = useState(0)
	const [match, setMatch] = useState<Match>()

	const nextTick = () => setCurrentTick(increment)
	const prevTick = () => setCurrentTick(decrement)

	useEffect(() => {
		fetchMatch(props.matchUrl).then(setMatch)
	}, [props.matchUrl] )

	return (
		<div className="Player">
			<h2>current tick: { currentTick }</h2>
			<PlayerControls
				isPlaying = {isPlaying}
				nextEnabled = { match !== undefined && (currentTick < (match.states.length - 1)) }
				prevEnabled = { match !== undefined && (currentTick > 0) }
				onPlay = { () => setIsPlaying((prev) => !prev) }
				onNext = { nextTick }
				onPrev = { prevTick }
			/>
			{/**/}
			{
				match !== undefined  && <Canvas tick={currentTick} width={500} height={500} matchConfig={match.config} matchState={match.states[currentTick]}/>
			}
		</div>
	)
}

type PlayerProps = {
    gameName: string,
    matchUrl: string
}

const fetchMatch = async (url: string): Promise<Match> => {
	const res = await fetch(url)
	return res.json()
}

const increment = (v: number) => v + 1
const decrement = (v: number) => v - 1