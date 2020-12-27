package io.github.plai.arkanoid

import io.paulpaulych.plai.domain.GameConfig
import io.paulpaulych.plai.domain.GameState

fun replay(config: GameConfig, states: Sequence<GameState>){
    states.forEach { print(config, it) }
}

private fun print(config: GameConfig, state: GameState){
    for (i in 0 until 1000) {
        print("\b")
    }

    val rows = mutableListOf<MutableList<Char>>()
    repeat(config.height) {
        val row = mutableListOf<Char>()
        repeat(config.width) {
            row.add('.')
        }
        rows.add(row)
    }

    state.bricks.forEach {
        val brick = it
        rows[brick.startCell.row][brick.startCell.col] = '1'
        rows[brick.startCell.row][brick.startCell.col+1] = '1'
        rows[brick.startCell.row+1][brick.startCell.col] = '1'
        rows[brick.startCell.row+1][brick.startCell.col+1] = '1'
    }
    val paddleCols = (state.paddle.col until (state.paddle.col + config.paddleSize))
    paddleCols.forEach { rows.last()[it] = 'X' }

    rows[state.ball.cell.row][state.ball.cell.col] = '0'

    rows.forEach {
        it.forEach {
            print("$it ")
        }
        println()
    }
    println("_________________________________________")
}
