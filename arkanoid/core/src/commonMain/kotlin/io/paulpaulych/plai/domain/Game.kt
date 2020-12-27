package io.paulpaulych.plai.domain

import io.paulpaulych.plai.domain.BallCollision.BrickCollision
import io.paulpaulych.plai.domain.BallCollision.Type.*
import kotlin.math.min

data class GameConfig(
    val ballSpeed: Int,
    val paddleMaxSpeed: Int,
    val height: Int,
    val width: Int,
    val paddleSize: Int,
    val brickHeight: Int,
    val brickWidth: Int,
){
    init {
        requirePositive(ballSpeed, "ballSpeed")
        requirePositive(paddleMaxSpeed, "paddleMaxSpeed")
        requirePositive(height, "height")
        requirePositive(width, "width")
        requirePositive(paddleSize, "paddleSize")
        require(paddleSize < width){
            "paddle size must be less than field width"
        }
        require(ballSpeed < min(width/4, height/4)){ "too fast ball" }
        require(paddleMaxSpeed < min(width/4, height/4)){
            "too fast paddle: $paddleMaxSpeed"
        }
    }
}

data class Cell(val row: Int, val col: Int)

data class Brick(
    val startCell: Cell
) {

    fun cells(height: Int, width: Int): List<Cell> = (0 until height).flatMap { row ->
        (0 until width).map { col ->
            Cell(row = startCell.col + row, col = startCell.col + col)
        }
    }

}

data class Paddle (
    val col: Int,
    val speed: Int)

data class Ball(
    val cell: Cell,
    val direction: BallDirection
){

    fun nextForward(): Ball {
        val dirVector = direction.vector(1)
        return copy(cell = Cell(
            row = cell.row - dirVector.first,
            col = cell.col - dirVector.second))
    }

    fun reflect(collisionType: BallCollision.Type): Ball =
        copy(direction = when(collisionType){
            CORNER -> direction.opposite()
            HORIZONTAL -> direction.oppositeHorizontal()
            VERTICAL -> direction.oppositeVertical()
        })
}


data class GameState(
    val bricks: List<Brick>,
    val paddle: Paddle,
    val ball: Ball)

data class BallDirection(
    val vertPositive: Boolean,
    val horPositive: Boolean
) {
    fun opposite() = BallDirection(!vertPositive, !horPositive)
    fun oppositeHorizontal() = BallDirection(!vertPositive, horPositive)
    fun oppositeVertical() = BallDirection(vertPositive, !horPositive)

    fun vector(len: Int) = Pair(
        if(vertPositive) len else -len,
        if(horPositive) len else -len)
}

class Game(
    private val config: GameConfig
) {

    private var tickNumber = 0

    private var state: GameState

    init {
        val bricksInRow = config.width  / 2 / config.brickWidth
        val bricksInCol = config.height / 5 / config.brickHeight
        val bricksRow = { rowNum: Int ->
            (0 until bricksInRow).map { brickInRow ->
                Brick(Cell(
                    row = rowNum * 2 * config.brickHeight,
                    col = brickInRow * 2 * config.brickWidth))
            }
        }
        val bricks = (0 until bricksInCol).flatMap(bricksRow)
        val ball = Ball(
            cell = Cell(config.width / 2, config.height / 2),
            direction = BallDirection(vertPositive = true, horPositive = true))

        state = GameState(
            bricks = bricks,
            paddle = Paddle(col = 0, speed = 0),
            ball = ball)
    }

    fun tick(): GameState? {
        val newBall = state.ball.nextForward()
        checkBallCollision(newBall)
        state = state.copy(ball = newBall)

        tickNumber++
        return state.takeIf { tickNumber < 5 }
    }

    private fun checkBallCollision(newBall: Ball): BallCollision? {
        val bricksToCells = state.bricks.map { brick ->
            val cell = brick.startCell
            val cells = state.bricks.associateBy(Brick::startCell)
            brick to cells
        }
        bricksToCells.map { (brick, cells) ->
            if (newBall.cell in cells){
               return BrickCollision(brick, CORNER)
            }
        }

        return null
    }
}

fun requirePositive(v: Int, name: String){
    require(v > 0) { "$name must be positive"}
}

sealed class BallCollision(
    val type: Type
) {
    class BrickCollision(val brick: Brick, type: Type): BallCollision(type)
    class BorderCollision(type: Type): BallCollision(type)
    class PaddleCollision(brick: Brick, type: Type): BallCollision(type)

    enum class Type { CORNER, HORIZONTAL, VERTICAL }
}
