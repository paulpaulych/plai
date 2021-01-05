
export type Pos = {
    x: number
    y: number
}

export type MatchConfig = {
    ballSpeed: number
    paddleSpeed: number
    fieldHeight: number
    fieldWidth: number
    paddleWidth: number
    paddleHeight: number
    brickHeight: number
    brickWidth: number
    ballRadius: number
}

export type Paddle = {
    x: number
}

export type Ball = {
    pos: Pos
}

export type MatchState = {
    bricks: Brick[]
    paddle: Paddle,
    ball: Ball
}

export type Brick = {
    pos: Pos
}

export type Match = {
    config: MatchConfig
    states: MatchState[]
}
