import io.github.plai.arkanoid.replay
import io.paulpaulych.plai.domain.Game
import io.paulpaulych.plai.domain.GameConfig
import io.paulpaulych.plai.domain.GameState

fun main() {
    val config = GameConfig(
        ballSpeed = 1,
        paddleMaxSpeed = 1,
        height = 20,
        width = 20,
        paddleSize = 5,
        brickHeight = 2,
        brickWidth = 2
    )

    val game = Game(config)

    val iterator = object : Iterator<GameState> {
        private var next: GameState? = null
        override fun hasNext(): Boolean {
            next = game.tick()
            return next != null
        }
        override fun next() = next
            ?: throw NoSuchElementException("no more states")
    }

    replay(config, iterator.asSequence())
}