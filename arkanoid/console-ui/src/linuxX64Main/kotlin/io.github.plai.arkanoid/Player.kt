package io.github.plai.arkanoid

import io.paulpaulych.plai.domain.MatchConfig
import io.paulpaulych.plai.domain.MatchState

fun replay(config: MatchConfig, states: Sequence<MatchState>){
    states.forEach { print(config, it) }
}

private fun print(config: MatchConfig, state: MatchState){
    for (i in 0 until 1000) {
        print("\b")
    }

    val rows = mutableListOf<MutableList<Char>>()
    repeat(config.fieldHeight) {
        val row = mutableListOf<Char>()
        repeat(config.fieldWidth) {
            row.add('.')
        }
        rows.add(row)
    }

    state.bricks.forEach {
        val brick = it
        rows[brick.pos.x][brick.pos.y] = '1'
        rows[brick.pos.x][brick.pos.y+1] = '1'
        rows[brick.pos.x+1][brick.pos.y] = '1'
        rows[brick.pos.x+1][brick.pos.y+1] = '1'
    }
    val paddleCols = (state.paddle.col until (state.paddle.col + config.paddleHeight))
    paddleCols.forEach { rows.last()[it] = 'X' }

    rows[state.ball.pos.x][state.ball.pos.y] = '0'

    rows.forEach {
        it.forEach {
            print("$it ")
        }
        println()
    }
    println("_________________________________________")
}
