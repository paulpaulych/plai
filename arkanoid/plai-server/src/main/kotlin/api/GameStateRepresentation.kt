package io.github.plai.api

import io.github.plai.Match
import io.paulpaulych.plai.domain.*
import kotlinx.serialization.Serializable

@Serializable
data class MatchRepr(
    val config: MatchConfigRepr,
    val states: List<MatchStateRepr>
)

@Serializable
data class MatchConfigRepr(
    val ballSpeed: Double,
    val paddleSpeed: Double,
    val paddleWidth: Double,
    val paddleHeight: Double,
    val brickHeight: Double,
    val brickWidth: Double,
    val ballRadius: Double)

@Serializable
data class PaddleRepr (val x: Double)

@Serializable
data class BallRepr(val pos: PosRepr)

@Serializable
data class MatchStateRepr(
    val bricks: List<BrickRepr>,
    val paddle: PaddleRepr,
    val ball: BallRepr)

@Serializable
data class BrickRepr(val pos: PosRepr)

@Serializable
data class PosRepr(val x: Double, val y: Double)

fun MatchConfig.toRepr() = MatchConfigRepr(
    ballSpeed = ballSpeed,
    paddleSpeed = paddleSpeed,
    paddleWidth = paddleWidth,
    paddleHeight = paddleHeight,
    brickWidth = brickWidth,
    brickHeight = brickHeight,
    ballRadius = ballRadius
)

fun MatchState.toRepr() = MatchStateRepr(
    bricks = bricks.map(Brick::toRepr),
    paddle = paddle.toRepr(),
    ball = ball.toRepr()
)

fun Match.toRepr() = MatchRepr(config.toRepr(), states.map(MatchState::toRepr))

fun Brick.toRepr() = BrickRepr(pos = pos.toRepr())

fun Pos.toRepr() = PosRepr(x, y)

fun Paddle.toRepr() = PaddleRepr(x)

fun Ball.toRepr() = BallRepr(pos.toRepr())