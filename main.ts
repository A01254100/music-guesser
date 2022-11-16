input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.showString("Nice! Press logo to play the next song.")
})
input.onButtonPressed(Button.B, function () {
    game.removeLife(1)
    basic.showString("Wrong. Press logo to play the next song.")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Song_selection = randint(1, 5)
    if (Song_selection == 1) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    if (Song_selection == 2) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
    if (Song_selection == 3) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
    if (Song_selection == 4) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    }
    if (Song_selection == 5) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
    basic.pause(500)
    basic.showString("Press A if you guessed correctly.")
    basic.pause(100)
    basic.showString("Press B if you don’t know the melody.")
    if (game.score() == 5) {
        basic.showString("Congratulations!")
    }
})
let Song_selection = 0
basic.showString("Guess 5 melodies correctly to win! If you fail 3 times you lose.")
basic.pause(100)
basic.showString("Press LOGO To Play a Start.")
game.setLife(3)
