package io.paulpaulych.plai.domain

import kotlin.math.min

const val MAX_PERCENTS = 100.0

data class MatchConfig(
    val ballSpeed: Double,
    val paddleSpeed: Double,
    val paddleWidth: Double,
    val paddleHeight: Double,
    val brickHeight: Double,
    val brickWidth: Double,
    val ballRadius: Double,
){
    init {
        requirePositive(ballSpeed, "ballSpeed")
        requirePositive(paddleSpeed, "paddleMaxSpeed")
        requirePositive(paddleHeight, "paddleSize")
        require(paddleWidth < MAX_PERCENTS){
            "paddle width must be less than $MAX_PERCENTS"
        }
        require(paddleHeight < MAX_PERCENTS){
            "paddle height must be less than $MAX_PERCENTS"
        }
        require(ballSpeed < min(MAX_PERCENTS/4, MAX_PERCENTS/4)){ "too fast ball" }
        require(paddleSpeed < min(MAX_PERCENTS/4, MAX_PERCENTS/4)){
            "too fast paddle: $paddleSpeed"
        }
    }
}

data class Vector(val dx: Double, val dy: Double)

data class Pos(val x: Double, val y: Double)

data class Brick(val pos: Pos)

data class Paddle (val x: Double)

data class Ball(val pos: Pos, val vector: Vector){
    fun nextForward(): Ball {
        val newPos = Pos(pos.x - vector.dx, pos.y - vector.dy)
        return copy(pos = newPos)
    }
}


data class MatchState(
    val bricks: List<Brick>,
    val paddle: Paddle,
    val ball: Ball)

class Game(
    private val config: MatchConfig
) {

    private var tickNumber = 0

    private var state: MatchState

    init {
        val bricksOnHor = MAX_PERCENTS  / 2 / config.brickWidth
        val bricksOnVer = MAX_PERCENTS / 5 / config.ballRadius
        val bricksRow = { rowNum: Int ->
            (0 until bricksOnHor.toInt()).map { brickInRowIndex ->
                Brick(Pos(
                        x = rowNum * 2 * config.brickWidth,
                        y = brickInRowIndex * 2 * config.brickHeight))
            }
        }
        val bricks = (0 until bricksOnVer.toInt()).flatMap(bricksRow)
        val ball = Ball(
            pos = Pos(MAX_PERCENTS / 2, MAX_PERCENTS / 2),
            vector = Vector(1.0, 1.0)
        )
        state = MatchState(
            bricks = bricks,
            paddle = Paddle(x = 0.0),
            ball = ball)
    }

    fun tick(): MatchState? {
        val newBall = state.ball.nextForward()
        state = state.copy(ball = newBall)
        return state.takeIf { 5 > tickNumber++ }
    }
}

fun requirePositive(v: Double, name: String){
    require(v > 0) { "$name must be positive"}
}
