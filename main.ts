input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    servos.P1.setAngle(100)
    basic.pause(1000)
    servos.P1.setAngle(-100)
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
