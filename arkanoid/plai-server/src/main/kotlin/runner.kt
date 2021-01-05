package io.github.plai

import io.paulpaulych.plai.domain.Game
import io.paulpaulych.plai.domain.MatchConfig
import io.paulpaulych.plai.domain.MatchState

data class Match(
    val config: MatchConfig,
    val states: List<MatchState>
)

suspend fun getMatch(): Match{
    val config = MatchConfig(
        ballSpeed = 1.0,
        paddleSpeed = 5.0,
        paddleWidth = 10.0,
        paddleHeight = 2.0,
        ballRadius = 3.0,
        brickWidth = 7.0,
        brickHeight = 3.0,
    )
    val game = Game(config)
    val iterator = object : Iterator<MatchState> {
        private var next: MatchState? = null
        override fun hasNext(): Boolean {
            next = game.tick()
            return next != null
        }
        override fun next() = next
            ?: throw NoSuchElementException("no more states")
    }
    return Match(config, Sequence { iterator }.toList())
}