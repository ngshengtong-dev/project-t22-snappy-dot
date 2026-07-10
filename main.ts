input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) < 2) {
        game.addScore(1)
        basic.showNumber(game.score())
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    if (game.isGameOver()) {
        game.addLife(1)
    }
})
let sprite: game.LedSprite = null
game.setScore(0)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(100)
    sprite.ifOnEdgeBounce()
})
