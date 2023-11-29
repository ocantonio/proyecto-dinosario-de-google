function obstaculo () {
    obstaculo1 = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        obstaculo1.change(LedSpriteProperty.X, -1)
        basic.pause(tiempo)
    }
}
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, -1)
    basic.pause(750)
    sprite.change(LedSpriteProperty.Y, 1)
    game.addScore(1)
})
let obstaculo1: game.LedSprite = null
let tiempo = 0
let sprite: game.LedSprite = null
basic.clearScreen()
sprite = game.createSprite(1, 4)
tiempo = 300
game.setScore(0)
obstaculo()
basic.forever(function () {
    if (obstaculo1.isTouching(sprite)) {
        sprite.delete()
        music.play(music.stringPlayable("- - F G F E D C ", 148), music.PlaybackMode.InBackground)
        game.gameOver()
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    }
})
basic.forever(function () {
    if (obstaculo1.isTouchingEdge()) {
        obstaculo1.delete()
        basic.pause(700)
        obstaculo()
        tiempo += -5
    }
})
