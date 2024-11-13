input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(-300)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.pause(500)
    servos.P1.setAngle(90)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(5000)
    pins.analogWritePin(AnalogPin.P2, 0)
})
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    . # . # .
    `)
servos.P1.setAngle(90)
