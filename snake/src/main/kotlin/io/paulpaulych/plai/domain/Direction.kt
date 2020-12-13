package io.paulpaulych.plai.domain

enum class Direction {
    RIGHT, UP, LEFT, DOWN;

    operator fun unaryMinus(): Direction = when(this){
        RIGHT -> LEFT
        UP -> DOWN
        LEFT -> RIGHT
        DOWN -> UP
    }
}