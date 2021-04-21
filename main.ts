input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(500)
    véletlen = Math.randomBoolean()
    if (véletlen == true) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(randint(0, 10))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("BALAZS")
})
let véletlen = false
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
