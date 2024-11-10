input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(100)
    basic.pause(500)
    servos.P1.setAngle(-100)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
