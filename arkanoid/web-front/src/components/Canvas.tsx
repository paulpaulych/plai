import React, {useRef, useEffect, ReactElement} from "react"
import {MatchConfig, MatchState, Pos} from "../api/game"

interface CanvasProps {
    width: number
    height: number
	matchState: MatchState
	matchConfig: MatchConfig
	tick: number
}

export const Canvas = ({tick, width, height, matchState, matchConfig }: CanvasProps): ReactElement => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const h2px = (percents: number): number => percents * height / 100
	const w2px = (percents: number): number => percents * width / 100

	const drawCircle = (context: CanvasRenderingContext2D, radius: number, pos: Pos) => {
		console.log(`ball : ${radius + " " + JSON.stringify(pos)}`)
		context.beginPath()
		context.arc(w2px(pos.x), h2px(pos.y), h2px(radius), 0, 2 * Math.PI)
		context.fill()
	}

	const drawRect = (context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) => {
		context.beginPath()
		context.rect(w2px(x), h2px(y), w2px(w), h2px(h))
		context.fill()
	}

	useEffect(() => {
		const context = canvasRef.current && canvasRef.current.getContext("2d")
		if(context){
			context.clearRect(0, 0, width, height)
			matchState.bricks.forEach((brick) =>
				drawRect(context, brick.pos.x, brick.pos.y, matchConfig.brickWidth, matchConfig.brickHeight))
			drawCircle(context, matchConfig.ballRadius, matchState.ball.pos)
			const paddleHeight = matchConfig.paddleHeight
			console.log("paddle: " + JSON.stringify(matchState.paddle) + " " + JSON.stringify(matchConfig))
			drawRect(context, matchState.paddle.x, height - paddleHeight, matchConfig.paddleWidth, paddleHeight)
		}
	},[canvasRef, tick])

	return <canvas style={{
		backgroundColor: "blue"
	}} ref={canvasRef} height={height} width={width} />
}
