package io.github.plai.api

import io.paulpaulych.plai.domain.*
import kotlinx.serialization.Serializable

@Serializable
data class PaddleRepr (
    val col: Int,
    val speed: Int)

@Serializable
data class BallRepr(val cell: CellRepr)

@Serializable
data class GameStateRepr(
    val bricks: List<BrickRepr>,
    val paddle: PaddleRepr,
    val ball: BallRepr)

@Serializable
data class BrickRepr(
    val startCell: CellRepr
)
@Serializable
data class CellRepr(val row: Int, val col: Int)

fun GameState.toRepr() = GameStateRepr(
    bricks = bricks.map(Brick::toRepr),
    paddle = paddle.toRepr(),
    ball = ball.toRepr()
)

fun Brick.toRepr() = BrickRepr(startCell = startCell.toRepr())

fun Cell.toRepr() = CellRepr(row, col)

fun Paddle.toRepr() = PaddleRepr(col, speed)

fun Ball.toRepr() = BallRepr(cell.toRepr())