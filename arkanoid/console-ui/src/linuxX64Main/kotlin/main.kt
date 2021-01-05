import io.github.plai.arkanoid.replay
import io.paulpaulych.plai.domain.Game
import io.paulpaulych.plai.domain.MatchConfig
import io.paulpaulych.plai.domain.MatchState

fun main() {
    val config = MatchConfig(
        ballSpeed = 1,
        paddleSpeed = 1,
        fieldHeight = 20,
        fieldWidth = 20,
        paddleHeight = 5,
        ballRadius = 2,
        brickWidth = 2
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

    replay(config, iterator.asSequence())
}