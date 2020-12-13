package io.paulpaulych.plai.domain

typealias Point = Pair<String, String>

private const val INITIAL_SIZE = 0

data class Snake(
    val id: String,
    val initialPosition: Pair<Point, Direction>
){
    private val direction = initialPosition.second
    private val points: List<Point>
    init {
        val start = initialPosition.first
        points = start.diff()


    }
    private fun pos: SnakePos = SnakePos(INITIAL_SIZE, )

    fun points(){
        pos.points()
    }
}

private data class SnakePos(
){

    init {
        require(points.size >= 2){ "snake size must be >= 2" }
        require(points[0].directionTo(points[1]) == -head){ "snake size must be >= 2" }
    }

    fun points(): List<Point> {
        return points.subList(1, points.size).fold(listOf(points.first())){ acc, cur ->
            acc + acc.last().diff(cur)
        }
    }
}

fun <T, R> List<T>.doubleFold(initial: R, operation: (acc: R, cur: T, next: T) -> R): R {
    var acc = initial
    subList(0, size - 1).forEachIndexed { index, cur ->
        val next = get(index + 1)
        acc = operation(acc, cur, next)
    }
    return acc
}

private fun Point.diff(other: Point): List<Point>{
    TODO()
}

private fun Point.directionTo(other: Point): Direction {
    TODO()
}

data class GameState(
    val snakes: List<Snake>
)

class SnakeGame(
    snakes: List<Snake>
) {
    private var state = GameState(snakes)

    fun tick() {
        move()
        findCollisions()
    }

    private fun move() {

    }

    private fun findCollisions(){

    }
}